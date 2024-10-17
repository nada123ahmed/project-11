import ProductCard from "../Components/ProductCard/ProductCard";

function Woman (props){
    function test(quantity){
props.test2(quantity)
    }
    return(
        <>
       
       <ProductCard test={test}></ProductCard>
        </>
    )
}

export default Woman;