<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>PWA Update Test</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">PWA Update Test</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>App Version: {{ version }}</strong>
      </div>

      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo" v-for="photo in photos">
            <ion-img
              :src="photo.webviewPath"
              @click="showActionSheet(photo)"
            ></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <p>
        {{ JSON.stringify(getPlatforms()) }}
      </p>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonIcon,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  actionSheetController,
  getPlatforms,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { camera, trash, close } from "ionicons/icons";

import { usePhotoGallery, UserPhoto } from "@/composables/photo-gallery";

export default defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonIcon,
    IonFabButton,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
  },
  setup() {
    const version = ref<number>(1);

    const { takePhoto, photos, deletePhoto } = usePhotoGallery();

    const showActionSheet = async (photo: UserPhoto) => {
      const actionSheet = await actionSheetController.create({
        header: "Photos",
        buttons: [
          {
            text: "Delete",
            role: "destructive",
            icon: trash,
            handler: () => {
              deletePhoto(photo);
            },
          },
          {
            text: "Cancel",
            icon: close,
            role: "cancel",
            handler: () => {
              // Nothing to do, action sheet is automatically closed
            },
          },
        ],
      });
      await actionSheet.present();
    };

    return {
      version,
      camera,
      takePhoto,
      photos,
      trash,
      close,
      showActionSheet,
      getPlatforms,
    };
  },
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
