$.getJSON("../data.json", function(data) {
    const table = $("#table");
    console.log(data.products.length);
    console.log(table);
    for (let i = 0; i < data.products.length; i++) {
      let createRow = $("<tr>");
      let createTableData1 = $("<td>");
      let createTableData2 = $("<td>");
      let createTableData3 = $("<td>");
      let createTableData4 = $("<td>");
      let createTableData5 = $("<td>");

      $(createTableData1, createTableData2, createTableData3, createTableData4, createTableData5).css("padding", "10px")


      createTableData1.text(data.products[i].name);
      createTableData2.text(data.products[i].stock_no);
      createTableData3.text(data.products[i].quantity_on_hand);
      createTableData4.text(data.products[i].size);
      createTableData5.text(data.products[i].color);

      createRow.append(createTableData1);
      createRow.append(createTableData2);
      createRow.append(createTableData3);
      createRow.append(createTableData4);
      createRow.append(createTableData5);

      table.append(createRow);
    }
  });