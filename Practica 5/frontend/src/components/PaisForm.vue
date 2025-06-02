<template>
  <div class="mb-4 p-4 border rounded">
    <h3 class="text-lg font-semibold mb-2">{{ editPais ? 'Editar País' : 'Crear País' }}</h3>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block mb-1">Nombre</label>
        <input v-model="pais.nombre" type="text" class="w-full p-2 border rounded" />
      </div>
      <div>
        <label class="block mb-1">Capital</label>
        <input v-model="pais.capital" type="text" class="w-full p-2 border rounded" />
      </div>
      <div>
        <label class="block mb-1">Continente</label>
        <input v-model="pais.continente" type="text" class="w-full p-2 border rounded" />
      </div>
    </div>
    <button @click="savePais" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
      {{ editPais ? 'Actualizar' : 'Crear' }}
    </button>
    <button v-if="editPais" @click="cancelEdit" class="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancelar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['editPais'],
  data() {
    return {
      pais: this.editPais ? { ...this.editPais } : { nombre: '', capital: '', continente: '' },
    };
  },
  methods: {
    async savePais() {
      try {
        if (this.editPais) {
          await axios.put(`http://localhost:3000/api/paises/${this.pais.id_pais}`, this.pais);
        } else {
          await axios.post('http://localhost:3000/api/paises', this.pais);
        }
        this.$emit('save');
        this.pais = { nombre: '', capital: '', continente: '' };
      } catch (error) {
        alert(error.response?.data?.error || 'Error al guardar el país');
      }
    },
    cancelEdit() {
      this.pais = { nombre: '', capital: '', continente: '' };
      this.$emit('save');
    },
  },
  watch: {
    editPais(newVal) {
      this.pais = newVal ? { ...newVal } : { nombre: '', capital: '', continente: '' };
    },
  },
};
</script>