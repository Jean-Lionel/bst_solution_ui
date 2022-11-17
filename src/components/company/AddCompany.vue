<template>
    <div>
        <modal-component :modalActive="modalActive">
            
            <form action="" @submit.prevent="saveCompany">
                
                <div>
                    <label for="tp_name">tp_name</label>
                    <input type="text" id="tp_name" v-model="form.tp_name" />
                </div>
                
                <div>
                    <label for="tp_type">tp_type</label>
                    <input type="text" id="tp_type" v-model="form.tp_type" />
                </div>
                <div>
                    <label for="tp_TIN">tp_TIN</label>
                    <input type="text" id="tp_TIN" v-model="form.tp_TIN" />
                </div>
                
                <div>
                    <label for="tp_trade_number">tp_trade_number</label>
                    <input type="text" id="tp_trade_number" v-model="form.tp_trade_number" />
                </div>
                <div>
                    <label for="tp_postal_number">tp_postal_number</label>
                    <input type="text" id="tp_postal_number" v-model="form.tp_postal_number" />
                </div>
                <div>
                    <label for="tp_phone_number">tp_phone_number</label>
                    <input type="text" v-model="form.tp_phone_number" />
                </div>
                <div>
                    <label for="tp_address_privonce">tp_address_privonce</label>
                    <input type="text" v-model="form.tp_address_privonce" />
                </div>
                <div>
                    <label for="tp_address_quartier">tp_address_quartier</label>
                    <input type="text" id="tp_address_quartier" v-model="form.tp_address_quartier" />
                </div>
                
                <div>
                    <label for="tp_address_commune">tp_address_commune</label>
                    <input type="text" v-model="form.tp_address_commune" />
                </div>
                
                <div>
                    <label for="tp_address_rue">tp_address_rue</label>
                    <input type="text" v-model="form.tp_address_rue" />
                </div>
                
                <div>
                    <label for="tp_address_number">tp_address_number</label>
                    <input type="text" v-model="form.tp_address_number" />
                </div>
                <div>
                    <label for="vat_taxpayer">vat_taxpayer</label>
                    <input type="text" v-model="form.vat_taxpayer" />
                </div>
                <div>
                    <label for="ct_taxpayer">ct_taxpayer</label>
                    <input type="text" v-model="form.ct_taxpayer" />
                </div>
                <div>
                    <label for="">tl_taxpayer</label>
                    <input type="text" v-model="form.tl_taxpayer" />
                </div>
                <div>
                    <label for="">tp_fiscal_center</label>
                    <input type="text" v-model="form.tp_fiscal_center" />
                </div>
                
                <div>
                    <label for="">tp_activity_sector</label>
                    <input type="text" v-model="form.tp_activity_sector" />
                </div>
                
                <div>
                    <label for="">tp_legal_form</label>
                    <input type="text" v-model="form.tp_legal_form" />
                </div>
                <div>
                   <label for="">payment_type</label>
                    <input type="text" v-model="form.payment_type" />
                </div>
                <div>
                   <label for="">description</label> 
                    <textarea v-model="form.description"></textarea>
                </div>
                <div>
                    <label for="company_owner_id">company_owner_id</label>
                    <input type="text" v-model="form.company_owner_id" />
                </div>
                <div>
                <button type="submit">Enregistrer</button>
                </div>
                
            </form>
            
        </modal-component>
    </div>
</template>

<script>
import ModalComponent from '../global/ModalComponent.vue'
export default {
    components: { ModalComponent },
    data(){
        return {
            modalActive : true,
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
                company_owner_id : "",
            }
        }
    },
    
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