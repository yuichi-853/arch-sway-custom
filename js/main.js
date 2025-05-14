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

            hljs.highlightAll();
        })
        .catch(err => {
            document.getElementById("content").innerHTML =
                `<p style="color: red;">読み込みエラー: ${err.message}</p>`;
        });
});
