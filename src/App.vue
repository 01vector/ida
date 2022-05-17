<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "./components/container/Card.vue";
import Input from "./components/interaction/Input.vue";
@Options({
  components: {
    Card,
    Input,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./styles/colors.scss";
@import "./styles/fonts.scss";

#app {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  margin-top: 60px;
}
</style>
