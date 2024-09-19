transform = (chapterNo, fenList) => console.log(...fenList.map((a, i) => 
`${i > 0? `

*

` : ''}[Event "Тест ${chapterNo}.${i+1}"]
[Result "*"]
[SetUp "1"]
[FEN "${a}"]`
));

window.confirm = () => true;
clearAll = () => {
    btn = document.querySelector('.study__chapters').querySelector('.act');
    if(btn) {
        btn.click();
        setTimeout(() => {deleteBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent === 'Delete chapter'); deleteBtn.click(); setTimeout(clearAll, 600);}, 500);
    }
};

