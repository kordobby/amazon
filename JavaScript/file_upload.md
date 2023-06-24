# File Upload

<img src="https://img.shields.io/badge/JavaScript-FDC813?style=flat&logo=JavaScript&logoColor=black"/>

## 파일 첨부 기능 참고 코드

: 사진 파일을 서버에 넘기는 코드 예시

```javascript
function savePost() {
  let file = $("#file")[0].files[0];
  let form_data = new FormData();

  let title = $("#post-title").val();
  let category = $("#post-category").val();
  let price = $("#post-price").val();
  let starPoints = $("#post-starpoints").val();
  let comment = $("#post-comment").val();

  form_data.append("file_give", file);
  form_data.append("title_give", title);
  form_data.append("category_give", category);
  form_data.append("price_give", price);
  form_data.append("starPoints_give", starPoints);
  form_data.append("comment_give", comment);

  $.ajax({
    type: "POST",
    url: "/savepost",
    data: form_data,
    cache: false,
    contentType: false,
    processData: false,
    success: function (response) {
      alert(response["msg"]);
      $(".modal").addClass("hidden");
    },
  });
}
```

```html
<!-- 파일 첨부 : img 파일형식 제한 -->
<div class="filebox form-ctrl">
  <label class="file-label">
    <input
      id="file"
      class="file-input"
      type="file"
      accept=".jpg, .jpeg, .png"
      name="resume"
    />
    <span class="file-cta"
      ><span class="file-icon"><i class="fas fa-upload"></i></span>
      <span class="file-label">Choose a Photo…</span></span
    >
  </label>
</div>
```

```python
@app.route("/savepost", methods=["POST"])
def save_post():
    # 서버 쪽 파일 받기 코드
    img = request.files["file_give"]
    # 파일 이름 변경해주고 저장하기 (1) 일단, 확장자를 빼내기
    extension = img.filename.split('.')[-1]
    # 지금 날짜 시간 찍기
    today = datetime.now()
    # 날짜 시간을 원하는 형태로 변환하기
    mytime = today.strftime('%Y-%m-%d-%H-%M-%S')
    # 파일 이름 변경해주고 저장하기 (2) 새로운 이름을 만들어주기
    filename = f'img-{mytime}'
    # 파일 이름 변경해주고 저장하기 (3) 새로운 이름으로 저장하기
    save_to = f'static/{filename}.{extension}'
    img.save(save_to)
    title_receive = request.form["title_give"]
    category_receive = request.form["category_give"]
    price_receive = request.form["price_give"]
    starpoints_receive = request.form["starPoints_give"]
    comment_receive = request.form["comment_give"]

    post_list = list(db.savepost.find({}, {'_id:False'}))
    count = len(post_list) + 1

    # 파일 이름 변경해주고 저장하기 (4) 변경된 파일 이름을 db에도 저장하기
    doc = {
        'num': count,
        'img': f'{filename}.{extension}',
        'title': title_receive,
        'category': category_receive,
        'price': price_receive,
        'starpoints': starpoints_receive,
        'comment': comment_receive
    }

    db.savepost.insert_one(doc)

    return jsonify({'msg': '등록 완료!'})
```
