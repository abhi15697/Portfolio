import resumeHtml from '../../Abhishek_Resume_ReactNative.html?raw';

export const generateAndDownloadResumePdf = async (
  onProgress?: (isGenerating: boolean) => void
): Promise<void> => {
  try {
    if (onProgress) onProgress(true);

    const pdfUrl = '/Abhishek_Kumar_Srivastava_React_Native_Developer.pdf';
    
    // Check if the pre-generated high-res PDF is available
    const response = await fetch(pdfUrl, { method: 'HEAD' });
    if (response.ok) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Abhishek_Kumar_Srivastava_React_Native_Developer.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Client-side dynamic fallback using html2pdf
    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default;

    const parser = new DOMParser();
    const doc = parser.parseFromString(resumeHtml, 'text/html');

    const styleTags = doc.querySelectorAll('style');
    const container = doc.querySelector('.container') || doc.body;

    const wrapper = document.createElement('div');
    wrapper.id = 'dynamic-resume-pdf-generator';
    wrapper.style.position = 'fixed';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '794px';
    wrapper.style.backgroundColor = '#ffffff';
    wrapper.style.color = '#222222';
    wrapper.style.zIndex = '-99999';
    wrapper.style.pointerEvents = 'none';

    styleTags.forEach((styleTag) => {
      wrapper.appendChild(styleTag.cloneNode(true));
    });

    wrapper.appendChild(container.cloneNode(true));
    document.body.appendChild(wrapper);

    await new Promise((resolve) => setTimeout(resolve, 200));

    const options = {
      margin: [6, 6, 6, 6] as [number, number, number, number],
      filename: 'Abhishek_Kumar_Srivastava_React_Native_Developer.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      enableLinks: true,
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        scrollY: 0,
        scrollX: 0,
        windowWidth: 794,
        backgroundColor: '#ffffff',
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait' as const,
        compress: true,
      },
    };

    await html2pdf().set(options).from(wrapper).save();

    if (document.body.contains(wrapper)) {
      document.body.removeChild(wrapper);
    }
  } catch (error) {
    console.error('Error generating PDF resume:', error);
    // Ultimate fallback: open HTML resume in new tab for direct browser print
    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    }
  } finally {
    if (onProgress) onProgress(false);
  }
};
