import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('todos')
export class Todo {
    // @PrimaryGeneratedColumn()
    @ObjectIdColumn()
    public id: ObjectID
    
    @Column()
    public title: string

    @Column()
    public completed: boolean

    public constructor(title: string) {
        this.title = title
        this.completed = false
    }
}
