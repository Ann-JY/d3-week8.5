import * as d3 from "d3"; //d3 가져오기
import "./viz.css"; //스타일링 첨부

////////////////////////////////////////////////////////////////////
////////////////////////////  Init  ///////////////////////////////
// svg
const svg = d3.select("#svg-container").append("svg").attr("id", "svg");
//변수설정
//html에 svg container에 있던 id 가져오기, id 정의

let width = parseInt(d3.select("#svg-container").style("width"));
//parseInt=어떤 값을 정수로 바꿔 리턴
//svg-container의 style인 width를 가져와라
let height = parseInt(d3.select("#svg-container").style("height"));
// console.log(height); //제대로 나오나 확인

const margin = { top: 50, right: 30, bottom: 60, left: 100 }; //svg 설정 끝

// parsing & formatting
const parseTime = d3.timeParse("%H");
const formatXAxis = d3.timeFormat("%H"); //formatting은 원하는 형태로 바꿀 때

// scale
const xScale = d3.scaleTime().range([margin.left, width - margin.right]);
const yScale = d3.scaleLinear().range([height - margin.bottom, margin.top]);

// axis
const xAxis = d3
  .axisBottom(xScale)
  .ticks(8)
  .tickFormat((d) => formatXAxis(d)) //x축설정, 항목을 5개로, 그걸 포맷 적용
  .tickSizeOuter(0); //축에서 밖으로 나오는 거 삭제, 안해도 딱히 지장은 없음

const yAxis = d3
  .axisLeft(yScale)
  .ticks(5)
  .tickSize(10)
  //.tickSize(-width + margin.right + margin.left) //가로선
  .tickPadding(7);

// line
const line = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line1));

const line2 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line2));

const line3 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line3));

const line4 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line4));

const line5 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line5));

const line6 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line6));

const line7 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line7));

const line8 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line8));

const line9 = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.line9));

const Sillim = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.Sillim));

const UiSinseol = d3
  .line()
  .x((d) => xScale(d.date_parsed))
  .y((d) => yScale(d.UiSinseol));

// svg elements

////////////////////////////////////////////////////////////////////
////////////////////////////  Load CSV  ////////////////////////////
//  data (d3.csv)
let data = [];
let path;

d3.json("data/convertcsv.json").then((raw_data) => {
  //날씨데이터값 불러오기

  data = raw_data.map((d) => {
    // console.log(d));

    d.date_parsed = parseTime(d.시간);
    return d;
  });

  //console.log(data);

  xScale.domain(d3.extent(data, (d) => d.date_parsed));
  yScale.domain([0, 200000]);

  //console.log(d3.extent(data, (d) => d.avg));/

  //axis
  svg
    .append("g") //group, 여러 요소를 넣겠다는 뜻
    // .attr("transform", "translate(0, " + (height - margin.bottom) + ")") //위치 정하기, 안하면 0,0에다 만들어짐
    .attr("class", "x-axis") //css에서 수정
    .attr("transform", `translate(0, ${height - margin.bottom})`) //`를 넣으면 ()안에 변수 넣을 수 있음, 안하면 숫자만
    .call(xAxis);
  // .call((g) =>
  //   g
  //     .append("text")
  //     .attr("x", width - 25)
  //     .attr("y", margin.bottom - 15)
  //     .text("(시간)")
  // );

  // svg
  //   .append("text")
  //   .text("(시간)")
  //   .attr("x", width - 25)
  //   .attr("y", margin.bottom - 15);

  svg
    .append("g")
    .attr("class", "y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis)
    .call((g) =>
      g
        .append("text")
        .attr("x", -margin.left + 35)
        .attr("y", 30)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("(인원수)")
    );

  // 첫 번째 라인
  svg
    .append("path")
    .datum(data)
    .attr("class", "line1")
    .attr("d", line)
    .attr("fill", "none")
    .attr("stroke", "#0052A4")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line2")
    .attr("d", line2)
    .attr("fill", "none")
    .attr("stroke", "#00A84D")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line3")
    .attr("d", line3)
    .attr("fill", "none")
    .attr("stroke", "#EF7C1C")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line4")
    .attr("d", line4)
    .attr("fill", "none")
    .attr("stroke", "#00A5DE")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line5")
    .attr("d", line5)
    .attr("fill", "none")
    .attr("stroke", "#996CAC")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line6")
    .attr("d", line6)
    .attr("fill", "none")
    .attr("stroke", "#CD7C2F")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line7")
    .attr("d", line7)
    .attr("fill", "none")
    .attr("stroke", "#747F00")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line8")
    .attr("d", line8)
    .attr("fill", "none")
    .attr("stroke", "#E6186C")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "line9")
    .attr("d", line9)
    .attr("fill", "none")
    .attr("stroke", "#BB8336")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "Sillim")
    .attr("d", Sillim)
    .attr("fill", "none")
    .attr("stroke", "#6789CA")
    .attr("stroke-width", 1.5);

  svg
    .append("path")
    .datum(data)
    .attr("class", "UiSinseol")
    .attr("d", UiSinseol)
    .attr("fill", "none")
    .attr("stroke", "#B0CE18")
    .attr("stroke-width", 1.5);

  //마우스오버 이벤트

  svg
    .selectAll(
      ".line1, .line2, .line3, .line4, .line5, .line6, .line7, .line8, .line9, .Sillim, .UiSinseol"
    )
    .on("mouseover", function (event, d) {
      const mouseX = event.offsetX || event.layerX;
      const mouseY = event.offsetY || event.layerY;

      const className = d3.select(this).attr("class");

      svg
        .append("rect")
        .attr("class", "tooltip-box")
        .attr("x", mouseX + 5)
        .attr("y", mouseY - 25)
        .attr("anchor", "middle")
        .attr("width", 70)
        .attr("height", 25)
        .style("fill", "lightgray")
        .style("opacity", 0.8)
        .attr("rx", 5)
        .attr("ry", 5);

      svg
        .append("text")
        .attr("class", "hover-text")
        .attr("x", mouseX + 40)
        .attr("y", mouseY - 10)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .text(className);

      d3.select(this).attr("stroke-width", 5);
    })
    .on("mouseout", function () {
      svg.select(".hover-text").remove();
      svg.select(".tooltip-box").remove();

      d3.select(this).attr("stroke-width", 1.5);
    });
});

//resize
window.addEventListener("resize", () => {
  width = parseInt(d3.select("#svg-container").style("width"));
  height = parseInt(d3.select("#svg-container").style("height"));
  xScale.range([margin.left, width - margin.right]);
  yScale.range([height - margin.bottom, margin.top]);

  line.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line1));
  svg.select(".line1").attr("d", line);
  line2.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line2));
  svg.select(".line2").attr("d", line2);
  line3.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line3));
  svg.select(".line3").attr("d", line3);
  line4.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line4));
  svg.select(".line4").attr("d", line4);
  line5.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line5));
  svg.select(".line5").attr("d", line5);
  line6.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line6));
  svg.select(".line6").attr("d", line6);
  line7.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line7));
  svg.select(".line7").attr("d", line7);
  line8.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line8));
  svg.select(".line8").attr("d", line8);
  line9.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.line9));
  svg.select(".line9").attr("d", line9);
  Sillim.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.Sillim));
  svg.select(".Sillim").attr("d", Sillim);
  UiSinseol.x((d) => xScale(d.date_parsed)).y((d) => yScale(d.UiSinseol));
  svg.select(".UiSinseol").attr("d", UiSinseol);

  d3.select(".x-axis")
    .attr("transform", `translate(0, ${height - margin.bottom})`)
    .call(xAxis);
  // .call((g) =>
  //   g
  //     .append("text")
  //     .attr("x", width - 25)
  //     .attr("y", margin.bottom - 15)
  //     .text("(시간)")
  // );

  yAxis.tickSize(10);

  d3.select(".y-axis")
    .attr("transform", `translate(${margin.left},0)`)
    .call(yAxis);
});
