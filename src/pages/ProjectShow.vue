<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  data() {
    return {
      project: {},
    }
  },
  methods: {
    fetchData() {
      axios.get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug).then((response) => {

        this.project = response.data;
      });
    },
    getImageUrl(project) {
      return `http://127.0.0.1:8000/storage/${project.thumb}`;
    },
    formatDate(data) {
      return dayjs(data).format("DD/MM/YYYY");
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>
<template>

<div class="container">
  <div class="row justify-content-center">
    <div class="col">
      <div class="card mt-5">
        <div class="card-header">
          <div class="d-flex justify-content-between">
            <h2 class="fs-4 text-lg my-4">
              {{ project.title }}
            </h2>
          </div>
          <div class="d-flex pt-2">
            <div class="row">
              <div class="col-12 col-md-4 text-center"><img class="w-100 object-fit-cover" :src="getImageUrl(project)" :alt="`${project.title}`">
              </div>
              <div class="col-12 col-md-8 mt-5 mt-md-0 d-flex flex-column">
                <p class="text-break">{{project.description}}</p>
                <div class="mt-auto">
                  <div class="d-flex">
                    <div class="col-4 me-2">Tipo:</div>
                    <div>{{project.type?.name ?? ""}}</div>
                  </div>
                  <div class="d-flex">
                    <div class="col-4 me-2">Data di rilascio:</div>
                    <div>{{formatDate(project.release)}}</div>
                  </div>
                  <div>
                    <div class="d-flex">
                      <div class="col-4 me-2">Linguaggi:</div>
                      <div class="d-flex">
                        <div class="me-2" v-for="technology in project.technologies">{{technology.name}},</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="d-flex">
                      <div class="col-4 me-2">GitHub:</div>
                      <div><a :href="`${project.link}`">{{project.link}}</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<style scoped></style>