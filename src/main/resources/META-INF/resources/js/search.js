document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 폼 기본 동작 차단(새로고침)
    const query = document.getElementById('searchInput').value.trim();
    if (!query) return;
    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
});

// ── 챔피언 데이터──────────────────────────────────────────────
const CHAMPIONS = [
    { name: '아트록스', engName: 'Aatrox', role: '전사', lane: '탑', img: '../images/ai.jpeg', difficulty: '상' },
    { name: '사일러스', engName: 'Sylas', role: '마법사', lane: '정글/미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Sylas.png', difficulty: '중' },
    { name: '애니비아', engName: 'Anivia', role: '마법사', lane: '미드', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Anivia.png', difficulty: '상' },
    { name: '브라이어', engName: 'Briar', role: '전사', lane: '정글', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Briar.png', difficulty: '중' },
    { name: '잭스', engName: 'Jax', role: '전사', lane: '탑', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jax.png', difficulty: '하' },
    { name: '징크스', engName: 'Jinx', role: '원거리딜러', lane: '원딜', img: 'https://ddragon.leagueoflegends.com/cdn/15.24.1/img/champion/Jinx.png', difficulty: '중' },
];

document.getElementById('champCount').textContent = `(${champResults.length})`; // 검색 결과 개수를 카운트 영역에 표시
document.getElementById('newsCount').textContent = `(${newsResults.length})`;

const champList = document.getElementById('championResultList'); // 검색 결과 없는 경우, 있으면 카드형태 출력
if (champResults.length === 0) {
    champList.innerHTML = `<div class="no-result"><h4> 검색 결과 없음</h4><p>"${query}"에 해당하는 챔피언이 없습니다.</p></div>`;
} else {
    champList.innerHTML = champResults.map(c => `
        <div class="search-result-card d-flex align-items-center p-0 overflow-hidden">
            <img src="${c.img}" alt="${c.name}">
            <div class="p-3">
                <div style="font-weight:700; font-size:1rem; color:#111;">${c.name} <span style="color:#888; font-size:0.85rem;">(${c.engName})</span></div>
                <div style="color:#555; font-size:0.9rem; margin-top:4px;">역할: ${c.role} &nbsp;|&nbsp; 라인: ${c.lane} &nbsp;|&nbsp; 난이도: ${c.difficulty}</div>
            </div>
        </div>
    `).join('');
}

const newsList = document.getElementById('newsResultList'); // 검색 결과 없는 경우, 있으면 카드형태 출력
if (newsResults.length === 0) {
    newsList.innerHTML = `<div class="no-result"><h4>검색 결과 없음</h4><p>"${query}"에 해당하는 뉴스가 없습니다.</p></div>`;
} else {
    newsList.innerHTML = newsResults.map(n => `
        <div class="search-result-card p-3">
            <span style="font-size:0.75rem; background:#c8253a; color:#fff; padding:2px 8px; border-radius:3px;">${n.category}</span>
            <div style="font-weight:700; font-size:1rem; color:#111; margin-top:8px;">${n.title}</div>
            <div style="color:#555; font-size:0.9rem; margin-top:4px;">${n.desc}</div>
        </div>
    `).join('');
}

switchCategory('champion', document.querySelector('.search-category-item')); // 챔피온 탭이 먼저 보임

document.querySelector('.hero').classList.add('d-none'); // 히어로 섹션 숨김
document.querySelectorAll('section:not(#searchResults)').forEach(s => s.classList.add('d-none')); // 나머지 섹션 숨김
document.getElementById('searchResults').classList.remove('d-none'); // 기타 섹션까지 숨김
document.getElementById('searchResults').style.display = 'block'; // 결과 섹션만 출력
