function processEmployees(employees){
    const filtered=employees.filter(emp=>emp.tasksCompleted>5);
    const mapped=filtered.map(emp=>{
        let performance="";
        if (emp.rating>4.5){
            performance="Excellent";
        } else if (emp.rating>=3 && emp.rating<=4.5){
            performance="Good";
        } else {
            performance="Needs Improvement";
        }
        return { name:emp.name, performance };
    });
    const priority={
        "Excellent": 1,
        "Good": 1,
        "Needs Improvement": 3
    };
    const sorted=mapped.sort((a,b)=>priority[a.performance] - priority[b.performance]);
    return sorted;
}