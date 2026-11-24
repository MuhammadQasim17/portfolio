import { useState, useMemo } from 'react';
import { Award, ExternalLink, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

/**
 * Certifications component displaying verified credentials and professional certifications.
 * Ensures the CCNA certificate from Simplilearn is anchored at the bottom/last position.
 * Handles verifyUrl, certId, and fallback badges cleanly without breaking.
 */
export default function Certifications({ certifications = portfolioData.certifications, isFullWidth = false }) {
  const [copiedId, setCopiedId] = useState(null);

  // Guarantee CCNA from Simplilearn appears at the very bottom/last position
  const sortedCertifications = useMemo(() => {
    if (!certifications || !Array.isArray(certifications)) return [];

    return [...certifications].sort((a, b) => {
      const isCCNABottomA =
        (a.title && /ccna/i.test(a.title)) ||
        (a.issuer && /simplilearn/i.test(a.issuer));
      const isCCNABottomB =
        (b.title && /ccna/i.test(b.title)) ||
        (b.issuer && /simplilearn/i.test(b.issuer));

      if (isCCNABottomA && !isCCNABottomB) return 1;
      if (!isCCNABottomA && isCCNABottomB) return -1;
      return 0; // preserve order of other certifications
    });
  }, [certifications]);

  const handleCopyId = (certId, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!certId) return;
    navigator.clipboard.writeText(certId);
    setCopiedId(certId);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <div className={isFullWidth ? 'lg:col-span-12 max-w-5xl mx-auto' : 'lg:col-span-6'}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Certifications</h3>
          <p className="text-xs text-slate-500 font-mono">Meta, CCNA & University Verified</p>
        </div>
      </div>

      {/* Certifications List */}
      <div className="space-y-4">
        {sortedCertifications.map((cert, idx) => {
          const hasVerifyUrl = Boolean(cert.verifyUrl);
          const hasCertId = Boolean(cert.certId);

          // Action label: 'View Certificate' if certId is attached or Simplilearn, else 'Verify Credential'
          const actionLabel = hasCertId ? 'View Certificate' : 'Verify Credential';

          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800/80 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all hover:-translate-x-0.5 shadow-xs dark:shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              {/* Left Content */}
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800 flex-shrink-0 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{cert.issuer}</span>
                    <span className="text-slate-400 dark:text-slate-600">•</span>
                    <span className="font-mono text-slate-500">{cert.date}</span>

                    {/* Certificate ID Pill with Copy button */}
                    {hasCertId && (
                      <>
                        <span className="text-slate-400 dark:text-slate-600">•</span>
                        <button
                          type="button"
                          onClick={(e) => handleCopyId(cert.certId, e)}
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-cyan-700 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/20 hover:border-cyan-500/40 transition-all cursor-pointer"
                          title="Click to copy Certificate ID"
                        >
                          <span className="text-slate-500 dark:text-slate-400">ID:</span>
                          <span className="font-semibold">{cert.certId}</span>
                          {copiedId === cert.certId ? (
                            <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 ml-0.5" />
                          ) : (
                            <Copy className="w-3 h-3 text-cyan-600/80 dark:text-cyan-400/80 ml-0.5" />
                          )}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Action / Verification Badge */}
              {hasVerifyUrl ? (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-indigo-700 dark:text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-500 transition-all flex-shrink-0 self-start sm:self-center shadow-xs hover:shadow-indigo-500/20"
                >
                  <span>{actionLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : hasCertId ? (
                <button
                  type="button"
                  onClick={(e) => handleCopyId(cert.certId, e)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all flex-shrink-0 self-start sm:self-center cursor-pointer"
                  title="Click to copy Certificate ID"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>ID: {cert.certId}</span>
                  {copiedId === cert.certId ? (
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              ) : (
                <span className="text-xs font-mono text-slate-500 px-3 py-1 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 self-start sm:self-center">
                  Official Certification
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
