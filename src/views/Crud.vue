<template>
<div id='crud'>
    <v-container grid-list-xl fluid>
     <v-layout row wrap>
       <v-flex sm12>
        <v-toolbar>
        <v-toolbar-title>{{ testname }}</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="deep-orange" dark class="mb-2" v-on="on">新增</v-btn>
            <v-btn @click="upload">Upload
         <v-icon right dark>cloud_upload</v-icon>
       </v-btn>
      <input type="file" id="upload" ref="upload" @change="changexls" accept=".xls, .xlsx"/>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.age" label="age"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.gender" label="gender"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.city" label="city"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.salary" label="salary"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
        v-model="desserts"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.age }}</td>
          <td class="text-xs-left">{{ props.item.gender }}</td>
          <td class="text-xs-left">{{ props.item.city }}</td>
          <td class="text-xs-left">{{ props.item.salary }}</td>
          <td class="text-xs-left layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="editItem(props.item)"
              color='orange'
            >
              edit
            </v-icon>
            <v-icon
              small
             color='red' @click="deleteItem(props.item)"
            >
              delete
            </v-icon>
          </td>
        </template>
      </v-data-table>
      </v-flex>
      </v-layout>
      </v-container>
    </div>
</template>


<script>
import XLSX from 'xlsx'

export default {
  name: 'crud',
  data: () => ({
    dialog: false,
    testname: '数据校验',
    headers: [
      {
        text: '名称',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: '年龄', value: 'age'},
      { text: '性别', value: 'gender'},
      { text: '城市', value: 'city' },
      { text: '收入', value: 'salary' },
      { text: 'CURD', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      age: 0,
      gender: 0,
      city: 0,
      salary: 0
    },
    defaultItem: {
      name: '',
      age: 0,
      gender: 0,
      city: 0,
      salary: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新增' : '编辑'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  mounted () {
    this.upload ()
  },

  methods: {
    upload() {
        let uploadbtn=this.$refs.upload
        uploadbtn.click()
    },
    changexls (file) {
       var wb;
       var rABS = false;
       let f=file.target.files[0];
       let xlsname=file.target.files[0].name;
       this.testname=xlsname;
       var reader = new FileReader();
       reader.onload = (e) => {
           var data = e.target.result;
           if(rABS) {
                wb = XLSX.read(btoa(fixdata(data)), {
                    type: 'base64'
                });
            } else {
                wb = XLSX.read(data, {
                    type: 'binary'
                });
            }
            let data1 = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            this.desserts=data1
       };
       if(rABS) {
            reader.readAsArrayBuffer(f);
        } else {
            reader.readAsBinaryString(f);
        };
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>


<style>
  #upload {
    height: 0;
    width: 0;
    visibility: hidden;
  }
</style>
