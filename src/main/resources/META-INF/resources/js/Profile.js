window.onload = function() {
    fetch('/profile/info') // 서버에서 사용자 정보 요청
        .then(res => res.json()) // json 파싱
        .then(data => {
            document.getElementById('infoUsername').textContent = data.username;
            document.getElementById('infoEmail').textContent = data.email;
            document.getElementById('infoPhone').textContent = data.phone;

            if (data.profileImage) {
                document.getElementById('profileImg').src =
                    '/uploads/profile/' + data.profileImage;
            }
        });
}