<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Lista de Ciudades</h2>
    <CiudadForm @save="loadCiudades" :editCiudad="selectedCiudad" :paises="paises" />
    <table class="w-full border-collapse border">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ID</th>
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Población</th>
          <th class="border p-2">Región</th>
          <th class="border p-2">País</th>
          <th class="border p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ciudad in ciudades" :key="ciudad.id_ciudad">
          <td class="border p-2">{{ ciudad.id_ciudad }}</td>
          <td class="border p-2">{{ ciudad.nombre }}</td>
          <td class="border p-2">{{ ciudad.poblacion }}</td>
          <td class="border p-2">{{ ciudad.region }}</td>
          <td class="border p-2">{{ ciudad.Pais ? ciudad.Pais.nombre : 'N/A' }}</td>
          <td class="border p-2">
            <button @click="editCiudad(ciudad)" class="px-2 py-1 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600">Editar</button>
            <button @click="deleteCiudad(ciudad.id_ciudad)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import CiudadForm from './CiudadForm.vue';

export default {
  components: { CiudadForm },
  data() {
    return {
      ciudades: [],
      paises: [],
      selectedCiudad: null,
    };
  },
  methods: {
    async loadCiudades() {
      try {
        const response = await axios.get('http://localhost:3000/api/ciudades');
        this.ciudades = response.data;
        this.selectedCiudad = null;
      } catch (error) {
        console.error('Error loading cities:', error);
      }
    },
    async loadPaises() {
      try {
        const response = await axios.get('http://localhost:3000/api/paises');
        this.paises = response.data;
      } catch (error) {
        console.error('Error loading countries:', error);
      }
    },
    async deleteCiudad(id) {
      if (confirm('¿Seguro que desea eliminar esta ciudad?')) {
        try {
          await axios.delete(`http://localhost:3000/api/ciudades/${id}`);
          this.loadCiudades();
        } catch (error) {
          console.error('Error deleting city:', error);
        }
      }
    },
    editCiudad(ciudad) {
      this.selectedCiudad = { ...ciudad };
    },
  },
  mounted() {
    this.loadCiudades();
    this.loadPaises();
  },
};
</script>