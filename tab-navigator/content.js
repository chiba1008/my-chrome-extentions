let currentIndex = 0;
let resultLinks = [];

const MARK_CLASS = "custom-marker";

function updateLinks() {
    resultLinks = Array.from(document.querySelectorAll("a h3")).map((h3) =>
        h3.closest("a")
    );
}

function markLink(index) {
    // 全リンクのマークをリセット
    resultLinks.forEach((link) => {
        const existingMark = link.querySelector(`.${MARK_CLASS}`);
        if (existingMark) existingMark.remove();
    });

    if (resultLinks[index]) {
        const marker = document.createElement("span");
        marker.textContent = "▶️ ";
        marker.className = MARK_CLASS;
        marker.style.marginRight = "5px";
        resultLinks[index].prepend(marker);
        resultLinks[index].scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }
}

document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;

    updateLinks(); // 最新のリンクを取得
    if (resultLinks.length === 0) return;

    if (e.key === "Tab") {
        e.preventDefault();

        if (e.shiftKey) {
            // Shift + Tab: ひとつ戻る
            currentIndex =
                (currentIndex - 1 + resultLinks.length) % resultLinks.length;
        } else {
            // Tab: 次へ進む
            currentIndex = (currentIndex + 1) % resultLinks.length;
        }

        markLink(currentIndex);
    }

    if (e.key === "Enter" && currentIndex >= 0) {
        e.preventDefault();
        const url = resultLinks[currentIndex].href;
        chrome.runtime.sendMessage({ action: "openTab", url });
    }
});

// 初期表示時に最初のURLをマーク
window.addEventListener("load", () => {
    updateLinks();
    if (resultLinks.length > 0) {
        currentIndex = 0;
        markLink(currentIndex);
    }
});
