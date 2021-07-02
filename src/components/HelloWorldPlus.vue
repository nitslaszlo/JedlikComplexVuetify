v<template>
  <v-form class="mt-3">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="nev" :rules="[v => v.length <= 20 || 'Max 20 karakter!']" counter="20" hint="Maximum 20 karakter engedélyezett" label="Kérem a neved!"></v-text-field>
          <v-text-field v-model="xek" :rules="[v => v.length <= 10 || 'Irgum-burgum max 10 darab X!']" counter="10" hint="Maximum 10 darab x engedélyezett" label="10 darab x"></v-text-field>
          <h3>Hello {{ nev }} {{ xek }} {{ felkialtojelek }}</h3>
          <p>Felkiáltójelek darabszáma: {{ felkialtojelDarab }}</p>
          <v-row justify="center">
            <v-btn class="mx-3" color="primary" :disabled="felkialtojelDarab == 10" @click="onClick('+')" elevation="5">Plus</v-btn>
            <v-btn class="mx-3" color="error" :disabled="felkialtojelDarab == 1" @click="onClick('-')" elevation="5">Minus</v-btn>
          </v-row>
        </v-col>

        <v-col cols="12" md="6">
          <ol>
            <li v-for="nap in napok" :key="nap">{{ nap }}</li>
          </ol>
          <v-text-field class="mb-6" v-model="inputNap" :rules="[napEllenorzese() || 'Ügyelj a helyesírásra!']" hint="Adjad meg egy nap nevét!" label="Kérem a nap nevét!"></v-text-field>

          <v-row justify="center">
            <v-btn class="mx-3" color="primary" :disabled="!joNapHozzadni(iNap)" @click="hozzadNap()" elevation="5">Nap hozzáadása</v-btn>
            <v-btn class="mx-3 mb-15" color="primary" :disabled="!joNapTorolni(iNap)" @click="torolNap()" elevation="5">Nap törlése</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class HelloWorldPlus extends Vue {
  private felkialtojelDarab: number;
  private nev: string;
  private xek: string;
  private felkialtojelek: string;
  private napok = ["hétfő", "kedd", "szerda"];
  private inputNap: string;

  public constructor() {
    super();
    this.felkialtojelDarab = 3;
    this.nev = "Jedlik Ányos";
    this.felkialtojelek = "!!!";
    this.xek = "";
    this.inputNap = "";
  }

  created(): void {
    setInterval(() => {
      let wrongCharPos = -1;
      for (let i = 0; i < this.xek.length; i++) {
        if (this.xek[i].toLowerCase() !== "x") {
          wrongCharPos = i;
          break;
        }
      }
      if (wrongCharPos !== -1) {
        if (this.xek.length <= 10) {
          this.xek = this.xek.replace(this.xek[wrongCharPos], "X");
        } else {
          this.xek = this.xek.replace(this.xek[wrongCharPos], "");
        }
      } else {
        if (this.xek.length < 10) {
          this.xek += "X";
        } else if (this.xek.length > 10) {
          this.xek = this.xek.slice(0, -1);
        }
      }
    }, 3000);
  }

  private onClick(művelet: string): void {
    if (művelet === "+") {
      this.felkialtojelDarab++;
    } else if (művelet === "-") {
      this.felkialtojelDarab--;
    }
  }

  private napEllenorzese(): boolean {
    const joNapok = ["", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    return joNapok.includes(this.iNap);
  }

  private joNapHozzadni(nap: string): boolean {
    return this.iNap !== "" && this.napEllenorzese() && !this.napok.includes(nap);
  }

  private hozzadNap(): void {
    this.napok.push(this.iNap);
    this.inputNap = "";
  }

  private joNapTorolni(nap: string): boolean {
    return this.napok.includes(nap);
  }

  private torolNap(): void {
    this.napok = this.napok.filter(i => i !== this.iNap);
    this.inputNap = "";
  }

  // computed
  private get iNap(): string {
    return this.inputNap.toLowerCase();
  }

  @Watch("felkialtojelDarab")
  private onNumChanged() {
    this.felkialtojelek = "!".repeat(this.felkialtojelDarab);
  }
}
</script>

<style scoped lang="scss">
ol {
  list-style-position: inside;
}

h3 {
  color: blue;
}

.v-form {
  background-color: lightskyblue;
}
</style>
