// 1. นำเข้า Hook 'useState' จาก React เพื่อใช้สร้างและจัดการ State ภายใน Component
import { useState } from "react";
// 2. นำเข้า Context Object ที่สร้างไว้ล่วงหน้า (MessageContext) เพื่อนำมาใช้เป็นตัวกระจายข้อมูล
import { MessageContext } from "./MessageContext";

// 3. สร้าง Component ชื่อ MessageProvider ทำหน้าที่เป็น Provider คอยกระจาย State และฟังก์ชัน
//    รับ 'children' มาเป็น Prop (หมายถึง Component ลูกทั้งหมดที่จะถูกหุ้มอยู่ภายใน Provider นี้)
export const MessageProvider = ({ children }) => {
  // --- [Flow: กำหนด State เริ่มต้น] ---
  // 4. สร้าง State สำหรับเก็บข้อความคำถาม (question) ค่าเริ่มต้นเป็นสตริงว่าง ""
  //    และฟังก์ชันสำหรับอัปเดตค่า (setQuestion)
  const [question, setQuestion] = useState("");

  // 5. สร้าง State สำหรับเก็บข้อความคำตอบ (answer) ค่าเริ่มต้นเป็นสตริงว่าง ""
  //    และฟังก์ชันสำหรับอัปเดตค่า (setAnswer)
  const [answer, setAnswer] = useState("");

  // --- [Flow: จัดการ Event และอัปเดตข้อมูล] ---
  // 6. ฟังก์ชันเมื่อเกิดการเปลี่ยนแปลงที่ช่องกรอกคำถาม (เช่น onChange ของ Input)
  const handleQuestion = (e) => {
    console.log(e); // พิมพ์ Event Object ออกมาดูบน Console เพื่อการ Debug
    setQuestion(e.target.value); // ดึงค่าจาก Input (e.target.value) ไปบันทึกลงใน State: question
  };

  // 7. ฟังก์ชันเมื่อเกิดการเปลี่ยนแปลงที่ช่องกรอกคำตอบ

  const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value); // ดึงค่าจาก Input (e.target.value) ไปบันทึกลงใน State: answer
  };

  // --- [Flow: ส่งต่อข้อมูลให้ Component ลูก] ---
  return (
    // 8. นำ MessageContext.Provider มาครอบ เพื่อเปิดท่อส่งข้อมูล
    //    กำหนด Prop 'value' โดยส่ง State (question, answer) และฟังก์ชัน (handleAnswer, handleQuestion) ไปแบบ Object
    <MessageContext.Provider
      value={{ question, answer, handleAnswer, handleQuestion }}
    >
      {/* 9. แสดงผล Component ลูกทั้งหมด โดยทุก Component ที่อยู่ใต้ {children} 
                   จะสามารถดึงค่าจาก value ด้านบนไปใช้งานได้ผ่าน useContext(MessageContext) */}
      {children}
    </MessageContext.Provider>
  );
};
