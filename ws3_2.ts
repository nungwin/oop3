function calculateprice(price: number, discountpercent: number): number {
    return price - (discountpercent / 100 * price);
}
let price = 1000;
let discountpercent = 5;
console.log(`ราคาสินค้า ${price} บาท ลดราคา ${discountpercent}% เหลือราคา ${calculateprice(price, discountpercent)} บาท`);