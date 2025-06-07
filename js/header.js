// 헤더 로드 함수
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.error('헤더를 불러오는 중 오류가 발생했습니다:', error);
        });
}

// DOM이 로드되면 헤더 로드 함수 실행
document.addEventListener('DOMContentLoaded', loadHeader);
