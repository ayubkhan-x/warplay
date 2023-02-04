<template>
  <section class="confirm">
    <div class="container">
      <div class="confirm__heading">
        <router-link to="/">
          <img src="../assets/img/icons/Arrow.svg" alt="">
        </router-link>
        <div class="confirm__heading_title">
          На вашу почту отправлено подтверждение
        </div>
      </div>
      <div class="confirm__about">
        <p class="confirm__about_text">
          На Ваш почтовый ящик отправлено сообщение, содержащее ссылку для подтверждения правильности e-mail адреса.
          Пожалуйста, перейдите по ссылке для завершения подписки.
        </p>
        <p class="confirm__about_text">
          Если письмо не пришло в течение 15 минут, проверьте папку «Спам». Если письмо вдруг попало в эту папку,
          откройте письмо, нажмите кнопку «Не спам» и перейдите по ссылке подтверждения. Если же письма нет и в папке
          «Спам», попробуйте подписаться ещё раз. Возможно, вы ошиблись при вводе адреса.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConfirmScreen"
}
</script>

<style lang="scss" scoped>
.confirm {
  &__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 47px;
    margin-top: 274px;
    margin-bottom: 65px;

    &_title {
      font-family: 'AireExterior';
      font-weight: 400;
      font-size: 39px;
      color: #FFFFFF;
    }
  }
  &__about {

    &_text {
      max-width: 836px;
      margin: 40px auto;
      font-family: 'Roboto';
      font-weight: 300;
      font-size: 16px;
      color: #ABABAB;
    }
  }
}
</style>