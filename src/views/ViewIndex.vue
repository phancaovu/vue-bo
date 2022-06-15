<template lang="">
    <div>
      <ComheaderVue></ComheaderVue>
      <section>
      <div class="container h-100">
        <div class="row mx-0 h-100">
          <!-- box-left-->
          <div class="col-md-9 mb-2 h-chart">
            <div class="row mx-0 py-1">
              <div class="col-12 col-md-3 col-lg-2 px-0 mb-1 mb-sm-2">
                <select class="form-select select-crypto py-0" aria-label="Default select example">
                  <option selected=""><span class="btc">BTC</span> / USDT</option>
                  <option value="1">BTC</option>
                  <option value="2">USDT</option>
                </select>
              </div>
              <div class="col-12 col-md-2 col-lg-3"></div>
              <div class="col-12 col-md-7 col-lg-7 px-0 mb-0 mb-sm-2">
                <div class="row mx-0">
                  <div class="col-12 crypto-balance d-flex justify-content-evenly">
                    <div class="item">$39,316.94</div>
                    <div class="item">-</div>
                    <div class="item">$39,316.94</div>
                    <div class="item">-</div>
                    <div class="item">$39,316.94</div>
                    <div class="item">-</div>
                    <div class="item">$39,316.94</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- ctrl-chart-->
            <div class="row mx-0 h-75">
              <div class="block-chart">
                <div id="chart"></div>
              </div>
            </div>
            <!-- status-->
            <div class="bg-blur p-lg-3 mt-lg-3">
              <div class="row mx-0 my-2">
                <div class="col-4 col-lg-7 px-0">
                  <div class="row mx-0 show-sm">
                    <div class="col-12 block-progress-status px-0">
                      <div class="progress mb-1">
                        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 48%;"></div>
                      </div>
                      <div class="value-up float-start">48%</div>
                      <div class="value-down float-end">52%</div>
                    </div>
                  </div>
                </div>
                <div class="col-8 col-lg-5">
                  <div class="row">
                    <div class="col-6 pe-0">
                      <div class="btn-status"><span class="status-green buy-color">BUY</span>73775</div>
                    </div>
                    <div class="col-6 pe-0">
                      <div class="btn-status"><span class="status-red sell-color">SELL</span>73775</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mx-0 mt-2 block-status-chart show-md-lg">
                <div class="chart-circle d-flex justify-content-between px-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mx-0 mt-2 block-status-chart show-sm">
                <div class="chart-circle d-flex justify-content-between px-0">
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                    <div>
                      <div class="item item-up"></div>
                      <div class="item item-down"></div>
                      <div class="item item-up"></div>
                      <div class="item item-up"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- box-right-->
          <div class="col-md-3 h-20">
            <!-- ctrl-box-->
            <div class="row">
              <div class="control-panel">
                <div class="ctrl-main">
                  <form class="py-lg-3 bg-blur">
                    <div class="row px-3 mt-0 mt-md-1">
                      <div class="col-12 ctrl-tittle show-md-lg">Amount</div>
                    </div>
                    <div class="row mx-0">
                      <div class="col-12 profit-box-mb d-flex justify-content-center">
                        <div class="item mx-1"><span>Profit</span></div>
                        <div class="item mx-1">90%</div>
                        <div class="item mx-1">-</div>
                        <div class="item mx-1">0.90</div>
                      </div>
                    </div>
                    <div class="row mx-0">
                      <div class="col-md-12">
                        <div class="row mx-0 bet-box mb-1 my-sm-1 py-1 py-sm-2">
                          <div class="col-12 bet-amout">
                            <input class="form-control ps-0" type="number" value="922220">
                            <button class="to-zero" type="button"><i class="fas fa-times-circle"></i></button>
                          </div>
                        </div>
                        <div class="row mx-0 show-md-lg">
                          <div class="col-md-12 px-0">
                            <div class="row mx-0 d-flex justify-content-between">
                              <div class="col-4 ps-0">
                                <button class="btn btn-time text-center" type="button">10</button>
                              </div>
                              <div class="col-4 px-2">
                                <button class="btn btn-time text-center" type="button">100<br></button>
                              </div>
                              <div class="col-4 pe-0">
                                <button class="btn btn-time text-center" type="button">500</button>
                              </div>
                            </div>
                            <div class="row mx-0 mt-2 d-flex justify-content-between">
                              <div class="col-4 ps-0">
                                <button class="btn btn-time text-center" type="button">-</button>
                              </div>
                              <div class="col-4 px-2">
                                <button class="btn btn-time text-center" type="button">+</button>
                              </div>
                              <div class="col-4 pe-0">
                                <button class="btn btn-time text-center" type="button">ALL</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row mx-0 bet-box show-md-lg">
                          <div class="col-md-12 ctrl-tittle px-0 mt-2">Profit</div>
                        </div>
                        <div class="row mx-0 bet-box show-md-lg">
                          <div class="col-12 profit-box d-flex justify-content-center py-1">
                            <div class="item">90%</div>
                            <div class="item">-</div>
                            <div class="item">0.90</div>
                          </div>
                        </div>
                        <div class="row mx-0 bet-box show-md-lg">
                          <div class="col-md-12 ctrl-tittle px-0 mt-2">Traders sentiments</div>
                        </div>
                        <div class="row mx-0 bet-box show-md-lg">
                          <div class="col-12 block-progress-status px-0">
                            <div class="progress my-1">
                              <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 48%;"></div>
                            </div>
                            <div class="value-up float-start">48%</div>
                            <div class="value-down float-end">52%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mx-0 mt-0 mt-sm-2">
                      <div class="col-4 col-md-12 col-lg-12">
                        <button class="row mx-0 buy-box mb-2" type="button">
                          <div class="col-md-6 box-text-left">39,316.94</div>
                          <div class="col-md-6 box-text-right">BUY</div>
                        </button>
                      </div>
                      <div class="col-4 col-md-12 col-lg-12">
                        <div class="row mx-0 time-box text-center mb-2">
                          <div class="col-md-6 time-box-left">WAIT</div>
                          <div class="col-md-6 time-box-right">15</div>
                        </div>
                      </div>
                      <div class="col-4 col-md-12 col-lg-12">
                        <button class="row mx-0 sell-box mb-2" type="button">
                          <div class="col-md-6 box-text-left">39,316.94</div>
                          <div class="col-md-6 box-text-right">SELL</div>
                        </button>
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
        
    </div>
</template>
<script>
export default {
    name: "view-index",
    components:{
    
    }
    
}
</script>
<style lang="">
    
</style>