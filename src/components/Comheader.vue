<template>

<header>
  <nav class="navbar navbar-expand-md bg-menu">
    <div class="container"><a class="navbar-brand" href="#"><img class="img-logo" src="@/assets/images/logo.png"/></a>
      <div class="navbar-balance-right text-center btn">Live<br/><span>$ 9,000,000,00</span></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="fas fa-align-justify fa-2x"></i></button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="index.html"><span><i class="fas fa-exchange-alt icon-rotate"></i>Trade</span></a></li>
          <li class="nav-item"><a class="nav-link" href="history.html"><span><i class="fas fa-history mx-1"></i>History</span></a></li>
          <li class="nav-item d-block d-sm-none"><a class="nav-link" href="#"><span><i class="fas fa-sign-out-alt mx-1"></i>Logout</span></a></li>
        </ul>
      </div>
      <div class="navbar-menu-right">
        <div class="balance-box">Balance<span>USDT 9,000,000,00</span></div>
      </div>
      <div class="navbar-menu-right">
        <div class="user-infor-box">btc3po.com@gmail.com</div>
      </div>
      <ul class="navbar-nav d-none d-sm-block">
        <li class="nav-item dropdown dropdown-logout"><a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="@/assets/images/user-icon.png"/></a>
          <ul class="dropdown-menu" aria-labelledby="">
            <li><a class="dropdown-item text-center" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>
<script>
export default {
    name: "ComheaderVue",
    
}
</script>
<style >
    
</style>