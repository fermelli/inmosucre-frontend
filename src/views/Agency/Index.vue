<template>
  <div>
    <div class="container container--view">
      <NoRecords
        title="no hay agencias registradas"
        icon-name="no-agency-records"
        @click-button="openModal()"
      />
      <ModalComponent
        :show-modal="showModal"
        title="registrar agencias"
        @close="closeModal()"
      >
        <template v-slot:body>
          <FormAgency
            :form-data="agency"
            @reset="closeModal()"
            @store-agency="storeAgency()"
          />
        </template>
      </ModalComponent>
    </div>
  </div>
</template>

<script>
import NoRecords from "@/components/NoRecords.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import FormAgency from "./FormAgency.vue";

export default {
  name: "Agency",
  components: {
    NoRecords,
    ModalComponent,
    FormAgency,
  },
  created() {
    this.agency = this.createAgencyObject();
  },
  data() {
    return {
      showModal: false,
      agency: {},
    };
  },
  methods: {
    createAgencyObject() {
      return {
        code: "",
        address: "",
        postalCode: "",
        city: "",
        fax: "",
        actionZone: "",
        phone: "",
      };
    },
    openModal() {
      this.agency = this.createAgencyObject();
      this.showModal = true;
    },
    closeModal() {
      this.agency = this.createAgencyObject();
      this.showModal = false;
    },
    storeAgency() {
      console.log(this.agency);
    },
  },
};
</script>

<style lang="scss" scoped></style>
