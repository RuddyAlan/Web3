<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Lista de Países</h2>
    <PaisForm @save="loadPaises" :editPais="selectedPais" />
    <table class="w-full border-collapse border">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ID</th>
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Capital</th>
          <th class="border p-2">Continente</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pais in paises" :key="pais.id_pais">
          <td class="border p-2">{{ pais.id_pais }}</td>
          <td class="border p-2">{{ pais.nombre }}</td>
          <td class="border p-2">{{ pais.capital }}</td>
          <td class="border p-2">{{ pais.continente }}</td>
          <td class="border p-2">
            <button @click="editPais(pais)" class="px-2 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">Editar</button>
            <button @click="deletePais(pais.id_pais)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import PaisForm from './PaisForm.vue';

export default {
  components: { PaisForm },
  data() {
    return {
      paises: [],
      selectedPais: null,
    };
  },
  methods: {
    async loadPaises() {
      try {
        const response = await axios.get('http://localhost:3000/api/paises');
        this.paises = response.data;
        this.selectedPais = null;
      } catch (error) {
        console.error('Error loading countries:', error);
      }
    },
    async deletePais(id) {
      if (confirm('¿Seguro que desea eliminar este país?')) {
        try {
          await axios.delete(`http://localhost:3000/api/paises/${id}`);
          this.loadPaises();
        } catch (error) {
          console.error('Error deleting country:', error);
        }
      }
    },
    editPais(pais) {
      this.selectedPais = { ...pais };
    },
  },
  mounted() {
    this.loadPaises();
  },
};
</script>