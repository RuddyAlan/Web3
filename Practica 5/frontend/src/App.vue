<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Gestión de Países y Ciudades</h1>
    <nav class="mb-4">
      <router-link to="/paises" class="px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600">Países</router-link>
      <router-link to="/ciudades" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Ciudades</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>