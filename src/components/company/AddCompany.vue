<template>
    <div>
        <modal-component :modalActive="modalActive" @close="close">
            
            <form action="" @submit.prevent="saveCompany">
                
                <div>
                    <label for="tp_name">tp_name</label>
                    <input type="text" id="tp_name" v-model="form.tp_name" required />
                    
                </div>
                
                <div>
                    <label for="tp_type">Type de contribuable.</label>
                    
                    <select name="" v-model="form.tp_type">
                        <option value=""></option>
                        <option value="1">personne physique</option>
                        <option value="2">personne morale</option>
                    </select>
                </div>
                <div>
                    <label for="tp_TIN">NIF du contribuable</label>
                    <input type="text" id="tp_TIN" v-model="form.tp_TIN" />
                </div>
                
                <div>
                    <label for="tp_trade_number"> Registre de commerce </label>
                    <input type="text" id="tp_trade_number" v-model="form.tp_trade_number" />
                </div>
                <div>
                    <label for="tp_postal_number">B.P</label>
                    <input type="text" id="tp_postal_number" v-model="form.tp_postal_number" />
                </div>
                <div>
                    <label for="tp_phone_number">Téléphone</label>
                    <input type="text" v-model="form.tp_phone_number" />
                </div>
                <div>
                    <label for="tp_address_privonce">Province</label>
                    <input type="text" v-model="form.tp_address_privonce" />
                </div>
                
                
                <div>
                    <label for="tp_address_commune">Commune</label>
                    <input type="text" v-model="form.tp_address_commune" />
                </div>
                <div>
                    <label for="tp_address_quartier">Quartier / Colline</label>
                    <input type="text" id="tp_address_quartier" v-model="form.tp_address_quartier" />
                </div>
                
                <div>
                    <label for="tp_address_rue">Rue</label>
                    <input type="text" v-model="form.tp_address_rue" />
                </div>
                
                <div>
                    <label for="tp_address_number">Numéro</label>
                    <input type="text" v-model="form.tp_address_number" />
                </div>
                <div>
                    <label for="vat_taxpayer">Assujetti à la TVA</label>
                    
                    <select name="" id="" v-model="form.vat_taxpayer">
                        <option value=""></option>
                        <option value="1">OUI</option>
                        <option value="0">NOM</option>
                    </select>
                </div>
                <div>
                    <label for="ct_taxpayer">Assujetti à la taxe de consommation</label>
                    <select name="" id="" v-model="form.ct_taxpayer">
                        <option value=""></option>
                        <option value="1">OUI</option>
                        <option value="0">NOM</option>
                    </select>
                </div>
                <div>
                    <label for="">Assujetti au prélèvement forfaitaire libératoire</label>
                    
                    <select name="" id="" v-model="form.tl_taxpayer">
                        <option value=""></option>
                        <option value="1">OUI</option>
                        <option value="0">NOM</option>
                    </select>
                </div>
                <div>
                    <label for="">centre fiscal du contribuable</label>
                    
                    <select name="" id="" v-model="form.tp_fiscal_center">
                        <option value=""></option>
                        <option value="DGC">Direction des Grands contribuables</option>
                        <option value="DMC">Direction des Moyens Contribuables</option>
                        <option value="DPMC">Direction des Petits et Micro Contribuables</option>
                    </select>
                </div>
                
                <div>
                    <label for="">Le secteur d’activité du contribuable</label>
                    <input type="text" v-model="form.tp_activity_sector" />
                </div>
                
                <div>
                    <label for="">forme juridique du contribuable</label>
                    <input type="text" v-model="form.tp_legal_form" />
                </div>
                <div>
                    <label for="">Type de paiement</label>
                    
                    <select name="" id="" v-model="form.payment_type">
                        <option value=""></option>
                        <option value="1">En espèce</option>
                        <option value="2">Banque</option>
                        <option value="3">A crédit</option>
                        <option value="4">Autres</option>
                    </select>
                </div>
                <div>
                    <label for="">description</label> 
                    <textarea v-model="form.description"></textarea>
                </div>
                
                <div>
                    <button type="submit">Enregistrer</button>
                </div>
                
            </form>
            <div class="error">
                {{ errors }}
            </div>
            
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    props: ["modalActive"],
    data(){
        return {
            form: {
                tp_name : "",
                tp_type : "",
                tp_TIN : "",
                tp_trade_number : "",
                tp_postal_number : "",
                tp_phone_number : "",
                tp_address_privonce : "",
                tp_address_quartier : "",
                tp_address_commune : "",
                tp_address_rue : "",
                tp_address_number : "",
                vat_taxpayer : "",
                ct_taxpayer : "",
                tl_taxpayer : "",
                tp_fiscal_center : "",
                tp_activity_sector : "",
                tp_legal_form : "",
                payment_type : "",
                description : "",
                company_category_id : 1,
                
            },
            errors:""
        }
    },
    methods: {
        saveCompany(){
            this.form.company_owner_id = this.$route.params.id 
            this.postData("companies",this.form)
            .then(resp =>{
                console.log(resp)
                this.errors = ""
                this.form = {}
                this.close()
            })
            .catch(err =>{
                console.log(err)
                this.errors = err.response
            })
            ;

        },
        close(){
            this.$emit("close")
        }
    }
    
}
</script>

<style  scoped>
input,label,textarea{
    display: inline-block;
    width: 250px;
    text-align: left;
}

form div {
    display: flex;
    justify-content: space-between;
}
</style>