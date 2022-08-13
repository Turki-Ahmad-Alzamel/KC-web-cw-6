
alert("مرحبا بك في موقعي الذي سيحسب درجتك")
let grade = prompt ("اكتب درجتك بالأرقام")
console.log (grade)
if (grade > 100) {
    console.log ("%cطلعت بوشلاخ ", "color: brown" )
} else if ( grade >= 90 && grade < 101) {
    console.log (" %cلقد حصلت على امتياز🥳", "color: green")
} else if ( grade < 90 && grade >= 80) {
    console.log (" %cلقد حصلت على جيد جدا🤩","color: green")
} else if (grade < 80 && grade >= 70) {
    console.log ("%cلقد حصلت على جيد🙂", "color: orange")
} else if (grade < 70 && grade >= 60) {
    console.log ("%cلقد حصلت على مقبول😕", "color: orange")
} else if (grade < 60 && grade >= 50) {
    console.log ("%cلقد حصلت على ضعيف☹️", "color: red")
} else if (grade < 50) {
    console.log (" %cلقد حصلت على ون بيس عمك.. نتغشمر , مع الاسف ساقط ", "color: red")
}
// يا بني ادم الجافاسكربت مو نفس الجافا

