<template>
  <div id="home" class="container animate__animated animate__fadeIn">
    <div class="py-4">
      <h2 class="text-left">Home Thermal Performance Assessment</h2>
    </div>
    <div class="row align-items-center">
      <div class="col-4">
        <font-awesome-icon class="text-secondary fa-10x pb-3" icon="home" />
      </div>
      <div class="col-8 card">
        <div class="card-body">
          <table class="table table-borderless">
            <thead>
              <th>Evaluation Item</th>
              <th>value</th>
            </thead>
            <tbody>
              <tr>
                <td>Literature Value(何これ?)</td>
                <td>0.45</td>
              </tr>
              <tr>
                <td>Estimted Value</td>
                <td>
                  '1-room-model': 0.3341823778689833 <br />
                  '2-room-model': 0.3850115768889433 <br />
                  '3-room-model': 0.48290556904183424
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card mt-3 py-3 container">
        <span
          >（仮スペース）ここら辺にネットワーク図組み込む？（どのノードが許可されているかのようなもの）</span
        >
      </div>
    </div>
  </div>
</template>
