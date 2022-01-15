function rot13(str) {
    const alpah = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    str = str.split("");
    let arr = str.map((ele) => {
        if (/[^A-Z]/.test(ele)) {
            return ele;
        } else {
            if (alpah.indexOf(ele) - 13 >= 0) {
                return (ele = alpah[alpah.indexOf(ele) - 13]);
            } else if (alpah.indexOf(ele) - 13 < 0) {
                return (ele = alpah[alpah.indexOf(ele) + 13]);
            }
        }
    });
    return arr.join("");
}
