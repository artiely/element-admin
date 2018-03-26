<template>
  <div>
    <!-- bidirectional data binding（双向数据绑定） -->
    <el-card>
      <quill-editor style="min-height:200px" v-model="content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
      </quill-editor>
      <div v-html="content"></div>
    </el-card>
  </div>
</template>
<script>
import hljs from 'highlight.js'
export default {
  data() {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': ['Arial', '宋体', '黑体', '微软雅黑'] }], // 字体要添加样式如下style
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          }
        }
      }
    }
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted() {
    console.log('this is current quill instance object', this.editor)
  }
}
</script>
<style lang="stylus">
.quill-editor {
  /* 工具栏内用 */
  .ql-font {
    span[data-value='Arial']::before {
      content: 'Arial' !important;
      font-family: 'Arial';
    }

    span[data-value='宋体']::before {
      content: '宋体' !important;
      font-family: '宋体';
    }

    span[data-value='黑体']::before {
      content: '黑体' !important;
      font-family: '黑体';
    }

    span[data-value='微软雅黑']::before {
      content: '微软雅黑' !important;
      font-family: '微软雅黑';
    }
  }

  /* 编辑器内容用 */
  .ql-font-Arial {
    font-family: 'Arial';
  }

  .ql-font-宋体 {
    font-family: '宋体';
  }

  .ql-font-黑体 {
    font-family: '黑体';
  }

  .ql-font-微软雅黑 {
    font-family: '微软雅黑';
  }
}
</style>
