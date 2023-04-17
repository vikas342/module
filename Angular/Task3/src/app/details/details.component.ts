import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() data!: number;
  marks = [
    {
      StudentID: 1,

      StudentName: 'Rahul',

      StudentImage: 'https://d2c967qfslpzim.cloudfront.net/images/img1.jpg',

      Address: 'Ahmedabad',

      DOB: '1980-02-9',

      Subjects: {
        Hindi: {
          Internal: 90,

          External: 100,
        },

        English: {
          Internal: 90,

          External: 100,
        },

        Math: {
          Internal: 90,

          External: 100,
        },

        Science: {
          Internal: 40,

          External: 50,
        },
      },
    },

    {
      StudentID: 2,

      StudentName: 'Rita',

      StudentImage: 'https://d2c967qfslpzim.cloudfront.net/images/img2.jpg',

      Address: 'Ahmedabad',

      DOB: '1987-02-9',

      Subjects: {
        Hindi: {
          Internal: 30,

          External: 100,
        },

        English: {
          Internal: 80,

          External: 100,
        },

        Math: {
          Internal: 70,

          External: 40,
        },

        Science: {
          Internal: 40,

          External: 50,
        },
      },
    },

    {
      StudentID: 3,

      StudentName: 'Rohan',

      StudentImage: 'https://d2c967qfslpzim.cloudfront.net/images/img3.jpg',

      Address: 'Ahmedabad',

      DOB: '1987-02-9',

      Subjects: {
        Hindi: {
          Internal: 30,

          External: 60,
        },

        English: {
          Internal: 80,

          External: 60,
        },

        Math: {
          Internal: 35,

          External: 40,
        },

        Science: {
          Internal: 40,

          External: 50,
        },
      },
    },
  ];
}
