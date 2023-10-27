import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public selectedFile: File | null = null;
  userId: any;

  constructor(private http: HttpClient, private router: Router) {}


  public images: any;


  async onSubmit(form: NgForm) {
    if (form.valid) {
      const productData = {
        name: form.value.name,
        price: form.value.price,
        descr: form.value.descr,
        size: form.value.size,
        category: form.value.category,
        state: form.value.state,
        image: ''
      };
      

      // if (this.selectedFile) {
      //   // Include the image data as Base64 in the JSON object
      //   const reader = new FileReader();
      //   reader.onload = (event) => {
      //     productData['image'] = event.target.result;
      //     this.createProduct(productData);
      //   };
      //   reader.readAsDataURL(this.selectedFile);
      // } 
      // else {
      //   this.createProduct(productData);
      // }

      const uploadImage = (file: any) => {
        const formData = new FormData();
        formData.append('image', file);
    
        const apiUrl = 'https://jzfubv9d33.execute-api.us-east-1.amazonaws.com/dev/images';
        this.http.post(apiUrl, formData).subscribe(
          (response: any) => {
            if (response) {
              const data = response
              productData.image = data?.url
              this.createProduct(productData);
          }}
        );
      }
      uploadImage(this.selectedFile)
    }
  }
  

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    
  }

  async createProduct(productData: any) {
    const apiUrl = 'https://jzfubv9d33.execute-api.us-east-1.amazonaws.com/dev/products/';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(apiUrl, productData, httpOptions).subscribe(
      (response) => {
        console.log('Producto creado:', response);
        this.router.navigate([/]);
      },
      (error) => {
        console.error('Error durante la creación del producto:', error);
      }
    );
  }
}
