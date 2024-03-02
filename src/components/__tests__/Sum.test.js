import Sum from "../Sum"


test("Test sum", ()=>{
    const res= Sum(2,3);

    expect(res).toBe(5);
})