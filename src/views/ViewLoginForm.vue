<template lang="">
    <div>
    <section class="h-100 p-0 m-0">
      <div class="login-form h-100">
        <div class="row mx-0 h-100">
          <div class="col-12 px-0 col-md-8 offset-md-2 col-lg-4 offset-lg-4 d-md-flex align-items-md-center">
            <div class="login-main w-100">
              <div class="row mx-0">
                <div class="col-md-6 login-main-left py-3 text-center">
                  <div class="row mx-0 h-100">
                    <div class="col-6 offset-3 col-md-12 offset-md-0 h-100 d-md-flex align-items-md-center"><img class="img-fluid" src="@/assets/images/logo.png"></div>
                  </div>
                </div>
                <div class="col-md-6 p-3 login-main-right">
                  <h3 class="text-center my-3 my-md-0">LOGIN</h3>
                  <form>
                    <div class="form-group mb-2 mb-sm-3 mb-md-2 mb-lg-2">
                      <label class="form-label mb-0">Email</label>
                      <input class="form-control" type="Email" required>
                    </div>
                    <div class="form-group mb-3 mb-sm-5 mb-md-2 mb-lg-3">
                      <label class="form-label mb-0">Password</label>
                      <input class="form-control" type="password" required>
                    </div>
                    <div class="form-group mb-2 mb-sm-3 mb-md-2 mb-lg-2">
                      <div class="d-grid">
                        <button class="btn btn-primary text-uppercase" type="submit">login</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <comfooterVue/>
    </div>
</template>
<script>
import comfooterVue from '@/components/comfooter.vue'
export default {
    name: "view-loginform",
    components:{
       comfooterVue
    }
}
</script>
<style lang="">
    
</style>