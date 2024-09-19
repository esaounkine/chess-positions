transform = (chapterNo, fenList) => console.log(...fenList.map((a, i) => 
`${i > 0? `

*

` : ''}[Event "Тест ${chapterNo}.${i+1}"]
[Result "*"]
[SetUp "1"]
[FEN "${a}"]`
));


clearAll = () => {
    btn = document.querySelector('.study__chapters').querySelector('.act');
    if(btn) {
        btn.click();
        setTimeout(() => {deleteBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent === 'Delete chapter'); deleteBtn.click(); setTimeout(clearAll, 200);}, 100);
    }
};

transform('13', [
	'6k1/3bpp2/3p2p1/2qP4/1p1Q2P1/pP3P2/P1P1N2r/1K2R3 w - - 0 1',
'6k1/5pp1/p1rrp2p/8/Q3P3/3q1PP1/1P3RKP/R7 w - - 0 1',
'r1bq1rk1/ppp2pb1/3p1npp/2nPp1B1/1PP1P3/2N5/P2QBPPP/R3K1NR w KQ - 0 1',
'4q3/p3Ppkp/1ppQ2p1/3p4/5P2/8/PPP3PP/6K1 w - - 0 1',
'7k/p5p1/1p2R2p/8/P1n1p3/6P1/5P1P/3r1BK1 w - - 0 1',
'2b5/5pk1/1pP1pp1p/pP6/2r1P3/6PP/6B1/3R1K2 w - - 0 1',
'rn3rk1/pp2nppp/4p3/2q1P3/2pN4/4B3/PP3PPP/R2Q1RK1 w - - 0 1',
'r2qk2r/ppp2p2/2npbp1p/2b1p2Q/2B1P3/3P3N/PPP2PPP/RN2K2R w KQkq - 0 1',
'r1b1k2r/ppp2ppp/2n5/3Bp1q1/1b1P4/8/PPP2PPP/RNBQK2R w KQkq - 0 1',
'3q2k1/5p1p/1pb1p1p1/2p1P3/2P2P2/2N3P1/PPQr3P/3R2K1 w - - 0 1',
'8/1pp3pp/p1nbkp2/8/3P4/2P1NN1P/PP3PP1/5K2 w - - 0 1',
'4R3/pp3Bpk/2q3np/8/8/B1P3P1/1P3P1P/6K1 w - - 0 1',
]);