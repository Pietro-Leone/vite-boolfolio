<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      pagination: {},
    }
  },
  methods: {
    fetchData(url) {
      axios.get(url ?? "http://127.0.0.1:8000/api/projects").then((response) => {

        this.projects = response.data.data

        delete response.data.data;

        this.pagination = response.data;

      });
    },
    getImageUrl(projects) {
      return `http://127.0.0.1:8000/storage/${projects.thumb}`;
    },
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <div class="jumbotron p-5 bg-dark rounded-3">
    <div class="container py-5">
      <div class="row gy-5">

        <div class="d-flex justify-content-center">
          <a v-for="pageLink in pagination.links" class="btn btn-light mx-3"
            :class="pageLink.active === true ? 'active' : ''" @click="fetchData(pageLink.url)"
            v-html="pageLink.label"></a>
        </div>

        <div class="col d-flex justify-content-center" v-for="element in projects">

          <div class="card-box">
            <div class="card h-100" style="width: 18rem;">
              <img :src="getImageUrl(element)" class="card-img-top object-fit-cover h-100" :alt="element.title">
              <div class="card-body">
                <h5 class="card-title text-center"><router-link class="text-decoration-none text-white"
                    :to="{ name: 'project.show', params: { slug: element.slug } }">{{ element.title }}</router-link></h5>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style></style>