<template>
    <div>
        <div id="invoice">
            <div class="print  no-print">
                <button class="" @click="printFacture"> <i class="fa fa-print"></i> Imprimer</button>
                <button class="" @click="$emit('close')">Fermer</button>
            </div>
            
            <div id="invoice_element">
                <div>
                </div>
                <header class="invoice_header">
                    <div>
                        <h1>Facture</h1>
                        
                    </div>
                    <div class="text-right">
                        <div>Serial No. <b> {{ order.id }}</b></div>
                        <div> <b>{{ order.created_at }}</b></div>
                        <div>{{ JSON.parse(order.client)?.customer_name }}</div>
                        <div>{{ JSON.parse(order.client)?.customer_TIN }}</div>
                    </div>
                </header>
                <!-- <section class="invoice_section">
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
                            <div>{{ client?.customer_name }}</div>
                            <div>NIF: {{ client.customer_TIN }}</div>
                            <div>Tél: {{ client?.telephone }}</div>
                        </div>
                    </div>
                </section> -->
                <section>
                    <div>
                        <table>
                            <thead>
                                <tr >
                                    <th class="text-left">Description</th>
                                    <th class="line">Qté</th>
                                    <th class="line">Prix</th>
                                    <th class="line">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, i ) in JSON.parse(order.products)" :key="i">
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
                                
                                <tr>
                                    <td colspan="3">User : {{ order.user.name}} </td>
                                    <td><small>{{new Date().toLocaleString()}}</small></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ["order"],
    computed: {
        products() {
            return this.order.products
        }
    },
    methods: {
        printFacture(){
            this.print("invoice", "Invoice-" + this.order?.id);
        }
    },
    computed: {
        client() {
            return JSON.parse(this.order.client)
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
    display: block;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
}
.print button{
    padding: 6px 6px;
}
@media print {
    *{
        font-size: 0.9rem !important;
    }
    .no-print{
        display: none;
    }
}
#invoice{
    font-size: 12px;
}

@media print {
    #invoice_element {
        font-family: "Open Sans", sans-serif;
        padding: 10px 10px;
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
    padding: 0 20px !important; 
}

.invoice_header,
.invoice_section {
    padding: 0 0 20px 0;
}

.line {
    padding: 10px ;
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