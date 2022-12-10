<template>
<div>
    <button class="print" @click="printFacture"> <i class="fa fa-print"></i> Imprimer</button>
    <div id="invoice">
    <div id="invoice_element">
        <div>
        </div>
        <header class="invoice_header">
            <div>
                <h1>Facture</h1>
            </div>
            <div class="text-right">
                <div>Serial No. <b> {{ order.id }}</b></div>
                <div>Invoice date: <b>{{ order.created_at }}</b></div>
            </div>
        </header>
        <section class="invoice_section">
            <div>
                <h4>Seller</h4>
                <div class="line"></div>
                <div class="tex-left">
                    <div>Towne, Smith and Ebert</div>
                    <div>Address: 89982 Pfeffer Falls Damianstad, CO</div>
                    <div>66972-8160</div>
                    <div>Code: 41-1985581</div>
                    <div>VAT code: 123456789</div>
                    <div>Phone: 760-355-3930</div>
                    <div>SWIFT: BANK101</div>
    
                </div>
    
                <div class="paiement-method">
                    <h4>Methode de Paiement</h4>
                    <b>CASH</b>
                </div>
            </div>
            <div>
                <h4>Buyer</h4>
                <div class="line"></div>
                <div class="text-right">
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
                        <tr v-for="(product, i ) in products" :key="i">
                            <td class="text-left">{{ product.name }}</td>
                            <td class="line">{{ product.quantity }}</td>
                            <td class="line">{{ product.price }} </td>
                            <th class="line">{{ product.prix_total }} </th>
                        </tr>
                        <tr>
                            <td colspan="3">Prix Hors TVA </td>
                            <th class="line">{{ order.amount }}</th>
                        </tr>
                        <tr>
                            <td colspan="3">Tax </td>
                            <th class="line">{{ order.tax }}</th>
                        </tr>
                        <tr>
                            <td colspan="3">TOTAL</td>
                            <th class="line">{{ order.amount_tax }}</th>
                        </tr>
    
    
                    </tbody>
                </table>
            </div>
        </section>
        <footer>
            <p> Nininahazwe Jean Lionel</p>
            <p>&copy; Pour usage de Test </p>
        </footer>
    </div>
    </div>
    </div>
</template>
    
<script>
    export default {
        props: ["order"],
        computed: {
            products() {
                return JSON.parse(this.order.products) 
            }
        },
        methods: {
            printFacture(){
                this.print("invoice", "Invoice-" + this.order?.id);
            }
        }
    }
</script>

<style  lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;  
}
.print{
    padding: 6px 6px;
}
#invoice{
    margin-top: 10px;
}

@media print {
    #invoice_element {
            font-family: "Open Sans", sans-serif;
            padding: 10px 40px;
            height: auto;
        }
}

header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    
}
.invoice_section {
    display: flex;
    justify-content: space-between;
    gap: 0 20px;
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
    margin: 10px 0px;
    border-bottom: 2px solid #ccc;
}

tr td {
    padding: 5px 10px;
}

footer {
    position: relative;
    top: 5px;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    
}

footer p {
    font-family: 'Tangerine', serif;
    font-size: 36px;
}
.paiement-method{
    padding: 10px 0 0 0;
}
</style>