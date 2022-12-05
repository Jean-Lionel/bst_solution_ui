<template>
    <div>
    <div id="invoice">
        <header class="invoice_header">
            <div>
                <h1>Facture</h1>
            </div>
            <div class="text-right">
                <div>Serial No. <b>AA. 00001</b></div>
                <div>Invoice date: <b>2022-02-14</b></div>
            </div>
        </header>
        <section class="invoice_section">
            <div>
                <h4>Seller</h4>
                <div class="line"></div>
                <div>
                    <div>Towne, Smith and Ebert</div>
                    <div>Address: 89982 Pfeffer Falls Damianstad, CO</div>
                    <div>66972-8160</div>
                    <div>Code: 41-1985581</div>
                    <div>VAT code: 123456789</div>
                    <div>Phone: 760-355-3930</div>
                    <div>SWIFT: BANK101</div>
    
                </div>
            </div>
            <div>
                <h4>Buyer</h4>
                <div class="line"></div>
                <div>
                    <div>John Doe</div>
                    <div>Email: test@example.com</div>
                </div>
            </div>
        </section>
        <section>
            <div>
                <table>
                    <thead>
                        <tr class="line">
                            <th class="text-left">Description</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Sub total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Ordinateur</td>
                            <td class="line">1</td>
                            <td class="line">4 500 000 </td>
                            <th class="line">4 500 000 </th>
                        </tr>
                        <tr>
                            <td colspan="3">Total discount </td>
                            <th class="line">4 500 000</th>
                        </tr>
                        <tr>
                            <td colspan="3">Taxable amount </td>
                            <th class="line">4 500 000</th>
                        </tr>
                        <tr>
                            <td colspan="3">Tax rate</td>
                            <th class="line">4 500 000</th>
                        </tr>
                        <tr>
                            <td colspan="3">Shipping</td>
                            <th class="line">1.99</th>
                        </tr>
                        <tr>
                            <td colspan="3">Total </td>
                            <th class="line">1.99</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        <footer>
            <p> Nininahazwe Jean Lionel</p>
            <!-- <p>Tél <i>+257 79 614 036 / 61 444 953</i></p>
                <p> Adresse <i>Bujumbura-Burundi</i></p> -->
            <p>&copy; Pour usage </p>
    
        </footer>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
}

body {
    width: 80%;
    margin: auto;

}

header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.invoice_section {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

table {
    width: 100%;
    text-align: right;
    border-collapse: collapse;
}

.text-left {
    text-align: left !important;
}

.text-right {
    text-align: right !important;
}

.invoice_header,
.invoice_section {
    margin: 0 0 50px 0;
}

.line {
    border-bottom: 2px solid #ccc;
}

tr td {
    padding: 5px 10px;
}

footer {
    position: relative;
    top: 50px;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;

}

footer p {
    font-family: 'Tangerine', serif;
    font-size: 36px;
}
</style>