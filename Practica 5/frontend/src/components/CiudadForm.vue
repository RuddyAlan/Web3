<template>
  <div class="mb-4 p-4 border rounded">
    <h3 class="text-lg font-semibold mb-2">{{ editCiudad ? 'Editar Ciudad' : 'Crear Ciudad' }}</h3>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block mb-1">Nombre</label>
        <input v-model="ciudad.nombre" type="text" class="w-full p-2 border rounded" />
      </div>
      <div>
        <label class="block mb-1">Población</label>
        <input v-model.number="ciudad.poblacion" type="number" class="w-full p-2 border rounded" />
      </div>
      <div>
        <label class="block mb-1">Región</label>
        <input v-model="ciudad.region" type="text" class="w-full p-2 border rounded" />
      </div>
      <div>
        <label class="block mb-1">País</label>
        <select v-model="ciudad.id_pais" class="w-full p-2 border rounded">
          <option value="">Seleccione un país</option>
          <option v-for="pais in paises" :key="pais.id_pais" :value="pais.id_pais">{{ pais.nombre }}</option>
        </select>
      </div>
    </div>
    <button @click="saveCiudad" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
      {{ editCiudad ? 'Actualizar' : 'Crear' }}
    </button>
    <button v-if="editCiudad" @click="cancelEdit" class="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancelar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['editCiudad', 'paises'],
  data() {
    return {
      ciudad: this.editCiudad
        ? { ...this.editCiudad }
        : { nombre: '', poblacion: 0, region: '', id_pais: '' },
    };
  },
  methods: {
    async saveCiudad() {
      try {
        if (this.editCiudad) {
          await axios.put(`http://localhost:3000/api/ciudades/${this.ciudad.id_ciudad}`, this.ciudad);
        } else {
          await axios.post('http://localhost:3000/api/ciudades', this.ciudad);
        }
        this.$emit('save');
        this.ciudad = { nombre: '', poblacion: 0, region: '', id_pais: '' };
      } catch (error) {
        alert(error.response?.data?.error || 'Error al guardar la ciudad');
      }
    },
    cancelEdit() {
      this.ciudad = { nombre: '', poblacion: 0, region: '', id_pais: '' };
      this.$emit('save');
    },
  },
  watch: {
    editCiudad(newVal) {
      this.ciudad = newVal ? { ...newVal } : { nombre: '', poblacion: 0, region: '', id_pais: '' };
    },
  },
};
</script>