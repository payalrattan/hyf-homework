class job{
    constructor(id, title, description, startDate,endDate){
        this.id = id;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getJobDetails(){
        return `Job ID: ${this.id}, Title: ${this.title}, Description: ${this.description}, Start Date: ${this.startDate}, End Date: ${this.endDate}`;
    }

}
class education{
constructor(id, title, school, address, startDate, endDate){
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
}
getEducationDetails(){
    return `Education ID: ${this.id}, Title: ${this.title}, School: ${this.school}, Address: ${this.address}, Start Date: ${this.startDate}, End Date: ${this.endDate}`;
}
}

const emp1 = new job(1, "Software Engineer", "Developing software", "2022-01-01", "2023-01-01");
console.log(emp1);
console.log(emp1.getJobDetails());
const emp2 = new education(1, "Bachelor's Degree", "XYZ University", "123 Main St", "2018-01-01", "2022-01-01");
console.log(emp2);

class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      //this.email = ?
    }
  
    addJob(job) {
      this.jobs.push(job);
    }
  
    removeJob(jobId) {
      this.job = this.jobs.filter(job => job.id !== jobId);
    }
  
    addEducation(education) {
        this.educations.push(education);
    }
  
    removeEducation(education) {
        this.educations = this.educations.filter(education => education.id !== education.id);
    }
  }

