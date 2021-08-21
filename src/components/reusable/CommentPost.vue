<template>
  <div class="commentPost ml-3">
    <div class="id">
      <span class="badge badge-warning">{{ id | updateId }}</span>
    </div>
    <div class="title p-2 mt-3 text-center">
      {{ name | upperCase }}
      <!-- <p class="author"><strong>Author :</strong><small class="">aaa@aaa.com</small></p> -->
    </div>
    <div class="content p-3 text-center">
      "{{ body }}"
      <div class="author">
          <span class="badge badge-pill badge-info"> 🖊{{ email }}</span>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "body", "email", "id"],
  filters: {
    upperCase(val) {
      return val.toUpperCase();
    },
    updateId(val) {
      return "ID 0" + val;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed&display=swap");
.commentPost {
  /* border: 1px solid black; */
  border-radius: 20px;
  max-width: 350px;
  min-height: 200px;
  padding: 0.4rem;
  background: url("https://img.freepik.com/free-psd/empty-blackboard_53876-78690.jpg?size=626&ext=jpg");
  background-size: cover;

  box-shadow: 10px 4px 8px -4px rgba(166, 227, 184, 0.75);
  -webkit-box-shadow: 10px 4px 8px -4px rgba(166, 227, 184, 0.75);
  -moz-box-shadow: 10px 4px 8px -4px rgba(166, 227, 184, 0.75);
  transition: 0.5s;
  position: relative;
}
.commentPost:hover {
  transform: scale(1.04);
}
.commentPost:hover .badge-warning{
    transform: scale(1.1);
}

.id{
    position: absolute;
    top: 0;
    left: 0;
}

.badge-warning {
    color: #212529;
    background-color: #ffc107;
    width: 60px;
    transform:rotate(-40deg) translateX(-10px);
    transition: .7s;
}

.title {
  width: 80%;
  margin: auto;
  /* background: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhMSEg8VFRUVGRcVFRUVDw8VFRUVFRgXFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFw8NFS0dFR0rKystLTcrLS0tLTctKystNy0rLSsrLTcrNystNy0tLS0rLSstKy0tKysrKystKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QALhAAAgEDAgQHAQEAAgMBAAAAAAECAyExcYEiQcHwBBESMlGRsdFhcrJioeFC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACBf/EABkRAQEBAQEBAAAAAAAAAAAAAAABEUECIf/aAAwDAQACEQMRAD8A+MoKzK1DGqJKR6EVb6ObXagPTnU2tGy2DSzqF4iONEZaZRWO+RX6cd8iel1LHy06BUGnHI2KBp4Y2McAmU1jRlMY3QmksaMqirgheHjxFMVxbrqIpWe5RDL/AMJmmpe4NcthbeTU7oGVUcsZ8aMTDLG+eNCZW03YXF8Rnr8lsKjK4s4sb4dyebt9B1JcKETlb6KqRP4rJ1DL3B8S77mUZX+wb4RU9wuSu9A5PzYLJoqastxEY33K5rH+E/ldi1E9aHFv0Yucc7dSma72Ymph7dSKbxEfxAKPC9h3iM7AwjwvYUQo/oqsr/RREXXV/oUiqQsImrotqrhJJq6NQUmaJZq5bJE1XJqCtou6L6bzsQUPci+KyFUEnnUb4rERMOeo3xS9plp1F/pS3hElBZ1K28aBUdQVvscsLcVQ5bht3BNpv27ldNkFKXt3LaTBGPqv0dTlZk9d23/oVCVmQVQl1DcrompyC9XmyCqNTI+E7bEFOXuHynZaAzYuqyt5/wCCIzv9/jE1athLq8Wz/BEj0p1OGIqVTG3UnlV4V38g+uy1QKQfiZX3YFKdvP5bE15gwlwrVk1hiytOhk30Oi8aC5SEtU8ifO/fwankDzvsyLK8ref+f0n87PbqNqyt3/onz4SIK7utDafsewus7rQOi+B6iiUwauTWZVyKKqK3kSVfcu+RdNW+iKeVuMBdVYJaiuW1lgjq5NQUFH3R75no0+ZDDKLKcrvVlVB0xnjHeIuj1QfjMxMl1Dn/AMh/njcnoc9eg/43KlRRljcNv/15CKT6jE87GU6L9uv8LYOx58n7df4WxdkSM8TLh3XU7w0rMV4iXDuupnhZEFsXgOHuZP6gvVfYEZCeR0p2+iSlK6N9WdiB9Wdno/wW58X3/wBRbnZ6P8EufF38Elvrt9dTVLC/8hCkbGd1/wAiQq773BhLhWrMru+3ViqbstWRVqVloA3ZAKVtjJyJO8898zKrxoBKXe5k3gkCs7Lv5EQfCw/Ez4Vr/RFJ8LEuqO60C8PeDF1HdaMLwb4WKB/TZZB8/wBRsn+kgVZW2JPK6KKztsT03gYBV+RFKHmW1+WhLI1EVTyiyK6kEJX+v0tjLqVEMpP9QfineIqk7G+IlgyTPDO+4/zzuS+Gd9x0nnvkVJtGXUKLzsTwl+jU87AhSft1/hb6rRPPk8d/BXJ+0qm+Imd4WX6Kr48/9N8JLKBKpMP1X2EVZXYcZX2JDjO8TnUs++Yr1e0Ccu9yB7lw7P8ABEZ+c0c5Z06CaUuNakl6kbGXEtRMpmxd9yRtaXEtOounKy1YNaXGtOrF05W3ZJVCX4DWlcCL72FVZ32JGyZ0ndaC5SstDKsvaRD4m8Uv9/oqnhm15W3E05Wewp1WV1o+ozwz4WTzldaMKhLhFGQZkpWTAizpvhRAFd2eiJaLG1nZk9F43GBTWljv4JWNm7Im9QxEJ3+iyLv9kKzuiuL/ABjRD6TsdXl5pagxwBVfCtQJ9B3HN+7Ym8M7jk/dsFJkMbherp+C4uyQX96IE3zstiuo/Z38EEHZa9Sys/b38EnVpW3B8LL3GV3bdAUHeQFY3dmqX4Jg7s1POhI1StHcVN37+QZSstwOZI2cr9/AijPjWpspXEUp8S1EPRnIKErkzmHGV+/gEOpPjWhkH1ETnxrRhQZI9TwZOWdAIMF4ZExytsDUl7e+YrzsZVdl3zJN8RLh3/oqnLOwXiMbiqPPYQxyNpz4UKrSOg+FCjYyzoZKXCgU86At8KJOq+1ktB3W5RVdmS0nxLcYKbKViVzHSdiWTuMFYnjUqTs9CGnIrbsNEPbstjKztuZJ2WwPiHYyT/DPvYcnnYm8M+9hyd3sFJqeA1jv4Fx/ptJ+a7+CIKcsar9LKrvHvmefB3WqK5yvHvmVQpytuDRd2DOVmZQd2CVxd2ZGWTPO7F+oC2b6/p0ZY0Fzee+ZnqutBQpSFUfcu/k6TBpS4kQVIZ53QqLOcrgXTfFEOnK5POXFHRh05CD/AFXRvnYVJ3OUrMk3zstEZVdluc+WxjJOrYFUHnYKq8gUcvYkTXee/k2GFuLrO775hU3wiBRf4c3YX522CbsSDVdnoT0/dHcdU9u3Umpy4l/nmago5O25OPbs9SdsYKnpy/S2TsQU8l0vaarPk+phbA1WZVdloDVdkYbPoPyDjK7E0nz0GLnsFUOjLO4VGQqP/wCjaTwRLhK616lcpXIKLutSpO5VQdR2YNCR1ZgUmBWefE9gYGRld7A05X+wTZvJqytBXqzp1D8/+pIM31BpviR1QXB8Ypan+AuVzl0FgmVZY3GKVkTVnjcdTwhR0ncxOzO87sGLs9wQpSxojpPIuo8aI2cs6EmVJX3R1J8T2FN336M6lLiEArZl3zOi7MGs7y75mRdhTW7bM5Ox3LYFciTJvhSEQ932OnhCY5e4xmubJ5DxLRqCpqfIv8+Hv5PPhyLl7e/kaPJlXloLnKyCqdBU8Iy0fB2ew2m7MRB2YUZWKqKFK0joSwKUrMKLvsBLpu616j/VdklGd0PUslRDqsugMJXBqPB0PcBVQd3ogIywdF32ATsBFF/gzzzoIi7obF2ZINV53FU3xDJPqIg+JiF3qBTOiC5W7+QaL8Q8DqMrE3iZDfDMeAz1ZCjK0txHqyFGVmCbUZ3qyBUZzdmKc33sDSlxAzeO/kGk+J6iBVnd98wYysdXyxcHYkf/AACLuc5ZMg7kmyfChEHd6jJuwqlzEOBgw6gCII6fItXtXfMjpZK4OyXeTVHkU8i3gPzuABHSdnqEBR5mt97gTI4YUH+LoLTszoy6dCRVHKHxlkmg+IZF5GiHzldd/IUXxCpO6OjLiYFTGVkYnb6ATsasfQEdPIcXwsXFmxdmCdKVvsRRd2HKVhVN37+BgWwlgW5WZylb6Ft2YEFd2Q/wsrEviXgZ4SQ8HTPV7glL9E+q0jfO5EblnULzsIcv0Z59SQaksd/IFOXEwKkrd/6ZTld6jg02u+IyOPoGq77HJ9CRrNX9AmzfPIJk3wiqXMOftApZW/4IdUeAYMKauJcvIVSKGSqD6k1L+fpRF2W41mCWQZM2L/Aa38BoymZJnU30MkSdJhf/ADoLqGr+Egwdw1zFwz9BxwxENeUZF8TMi7gp3YFQnwhU5WFLAUXYCbN27+QIzszG+EX52JDbsLgzJSsBF/gjVkXbv5Mi7MXGWNTPPqBD4l406h+FeBFd226jPCu6Hg6ZJ5Mg7gzeTI5At877jJSES6herBAFR/v9MpvOplXqZDnqzQ6bUf4bFiqjDpO30CNqs7zMqGJ9QaZJ2ZlN3W5nnZgp4EDbuJm7jU7iKkrlBS6f8G+q32Ig7jE7fZqswxMLxCFxeAvEMC2DDT73EKQalnQsOtqM3z6CpSwFKVkWLWrk9DYuz1FQljYJPOpA2Mr/AEanfcTFhRlfcsKjzsZBi1KyMjL8A6Y5WB9QHqsD6iwaY3YCEr7GSkLi7jg1SnY1SuIc7B+rBYddXf4FQlgRUlnYKnLBZ8G/TXI2m7iPUHB3+yw6OozpPAucjGyxa2pL9MpyzuBKX6dCXURo5sbR9rJpSHUZcLCqH+q2wLl1FqVnojHLG4YdGpAp4A9QKngcGj9VxMmd6rmSYjWQyHyOOENjgPxBxwEv42Djz0NOJFyClhbHHEgU/wCB/OpxxKOj/DVnc04iJYRi6Mw4EzkzEccKZLkDDP2ccIbLAbNOBEvnogocjjhTQ453OOAumCzTgVLfUyP9OOEMY+j7WccVUcsPQx8jTgJZkeRxwgKzuczjhT//2Q==');
background-size: cover; */
  background: wheat;
  color: black;
  border-radius: 50px;
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-size: .8rem;
  font-weight: bolder;
  transition: .5s;
}
.commentPost:hover .title{
    transform: scale(1.05);
}
.content {
  font-family: "Finger Paint", cursive;
  color: wheat;
}
.author {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  color: rgb(0, 0, 0);
  text-align: right;
}
</style>