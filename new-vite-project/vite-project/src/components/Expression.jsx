import "./Expression.css";

const Expression = () => {
    const arry = ["item1","item2","item3"];
    const hello = (arg) => `${arg} Function`;
    const jsx = <h3>hello JSX</h3>
    return (
        <div className="expression">
            <h3>Hello Expression</h3>
            <h3>{arry}</h3>
            <h3>{hello("Hello")}</h3>
            {jsx}
        </div>

    ) 
}
export default Expression;

