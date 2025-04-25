window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(location.search);
    const articleFile = params.get("article") || "article1.md";

    fetch(`articles/${articleFile}`)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        })
        .then(mdText => {
            const html = marked.parse(mdText);
            // document.getElementById("content").innerHTML = html;

            const contentEl = document.getElementById("content");
            contentEl.innerHTML = html;

            // ✅ YouTubeリンクをiframeに変換
            contentEl.querySelectorAll("a").forEach(link => {
                const href = link.href;
                const match = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                if (match) {
                    const videoId = match[1];
                    const wrapper = document.createElement("div");
                    wrapper.className = "ratio ratio-16x9 mb-4"; // Bootstrapの埋め込み対応クラス

                    const iframe = document.createElement("iframe");
                    iframe.src = `https://www.youtube.com/embed/${videoId}`;
                    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                    iframe.referrerPolicy = "strict-origin-when-cross-origin";
                    iframe.allowFullscreen = true;
                    iframe.title = "YouTube video player";

                    wrapper.appendChild(iframe);
                    link.replaceWith(wrapper);
                }
            });

            generateToc();

            hljs.highlightAll();
        })
        .catch(err => {
            document.getElementById("content").innerHTML =
                `<p style="color: red;">読み込みエラー: ${err.message}</p>`;
        });

    const panel = document.getElementById("toc-panel");
    panel.classList.toggle("open");
});

/**
 * 記事本文の見出し(h1～h3)からTOCを生成
 */
function generateToc() {
    const tocContainer = document.getElementById("article-toc");
    tocContainer.innerHTML = "";

    const headings = document.querySelectorAll("#content h1, #content h2, #content h3");
    headings.forEach(heading => {
        if (!heading.id) {
            heading.id = heading.textContent.replace(/\s+/g, "-").toLowerCase();
        }
        const link = document.createElement("a");
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.style.marginLeft = `${(parseInt(heading.tagName[1]) - 1) * 10}px`;
        tocContainer.appendChild(link);
    });
}

