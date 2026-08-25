export default function beautifyPrice (price: number) {
    const stringPrice = price.toString();   
    const [integerPart, restPart] = stringPrice.split(".");
    if(restPart?.length === 1) {
        return `${stringPrice}0`;
    }
    return stringPrice;
}