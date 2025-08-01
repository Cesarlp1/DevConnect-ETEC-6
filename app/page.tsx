"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import {
  BookOpen,
  Upload,
  CalendarIcon,
  MessageSquare,
  Users,
  ThumbsUp,
  Bell,
  Settings,
  FileText,
  Brain,
  GraduationCap,
  Star,
  Award,
  Briefcase,
  Building,
  Megaphone,
  MapPin,
  Link,
  Clock,
  TrendingUp,
  Timer,
  Video,
  PlayCircle,
  Menu,
  Home,
  User,
  Plus,
  UserPlus,
  Eye,
  CheckCircle,
  Trophy,
  Gem,
} from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function EtecbookMobileApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [userType, setUserType] = useState<"student" | "partner" | "staff" | "teacher" | "graduate" | null>(null)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    cnpj: "",
    institutionalId: "",
    rm: "",
    username: "",
  })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [registerType, setRegisterType] = useState<"student" | "teacher" | "partner" | null>(null)
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rm: "",
    username: "",
    cnpj: "",
    companyName: "",
    institutionalId: "",
    department: "",
  })

  // Dados mockados para demonstração
  const [userProfile, setUserProfile] = useState({
    name: "João Silva",
    age: 20,
    city: "São Paulo",
    course: "Análise e Desenvolvimento de Sistemas",
    semester: "4º Semestre",
    avatar: "/placeholder.svg?height=100&width=100&text=JS",
    coverImage: "/placeholder.svg?height=200&width=800&text=Sua+Capa+Personalizada",
    bio: "Sou um estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia e inovação. Busco sempre aprender e aplicar novos conhecimentos em projetos desafiadores.",
    rm: "2024001",
    username: "joao.silva",
    userType: "student" as const,
    videoStats: {
      totalVideos: 8,
      totalViews: 2450,
      totalLikes: 186,
      averageRating: 8.7,
    },
  })

  // Ranking dos alunos com maiores classificações
  const [topStudents, setTopStudents] = useState([
    {
      name: "Ana Costa",
      classification: "💎 Formada",
      score: 9.8,
      avatar: "/placeholder.svg?height=40&width=40&text=AC",
      course: "ADS 2023",
    },
    {
      name: "Carlos Silva",
      classification: "💎 Formado",
      score: 9.7,
      avatar: "/placeholder.svg?height=40&width=40&text=CS",
      course: "ADS 2023",
    },
    {
      name: "Maria Santos",
      classification: "🥇 Avançado",
      score: 9.2,
      avatar: "/placeholder.svg?height=40&width=40&text=MS",
      course: "4º Semestre",
    },
    {
      name: "Pedro Lima",
      classification: "🥇 Avançado",
      score: 9.0,
      avatar: "/placeholder.svg?height=40&width=40&text=PL",
      course: "4º Semestre",
    },
    {
      name: "Beatriz Oliveira",
      classification: "🥇 Avançado",
      score: 8.9,
      avatar: "/placeholder.svg?height=40&width=40&text=BO",
      course: "3º Semestre",
    },
    {
      name: "Lucas Fernandes",
      classification: "🥈 Intermediário",
      score: 8.5,
      avatar: "/placeholder.svg?height=40&width=40&text=LF",
      course: "3º Semestre",
    },
    {
      name: "Gabriela Costa",
      classification: "🥈 Intermediário",
      score: 8.3,
      avatar: "/placeholder.svg?height=40&width=40&text=GC",
      course: "2º Semestre",
    },
    {
      name: "Rafael Santos",
      classification: "🥈 Intermediário",
      score: 8.1,
      avatar: "/placeholder.svg?height=40&width=40&text=RS",
      course: "2º Semestre",
    },
  ])

  // Currículos em análise para parceiros
  const [curriculumsInAnalysis, setCurriculumsInAnalysis] = useState([
    {
      id: 1,
      studentName: "João Silva",
      course: "Análise e Desenvolvimento de Sistemas",
      semester: "4º Semestre",
      classification: "🥇 Avançado",
      score: 8.7,
      avatar: "/placeholder.svg?height=40&width=40&text=JS",
      appliedFor: "Estagiário Desenvolvedor Front-end",
      appliedDate: "2024-02-10",
      skills: ["React", "Node.js", "JavaScript", "HTML/CSS"],
      projects: 5,
      aiCompatibility: 87,
      status: "Em Análise",
    },
    {
      id: 2,
      studentName: "Maria Santos",
      course: "Análise e Desenvolvimento de Sistemas",
      semester: "3º Semestre",
      classification: "🥇 Avançado",
      score: 9.2,
      avatar: "/placeholder.svg?height=40&width=40&text=MS",
      appliedFor: "Estagiário Analista de Dados",
      appliedDate: "2024-02-08",
      skills: ["Python", "SQL", "Power BI", "Excel"],
      projects: 7,
      aiCompatibility: 92,
      status: "Aprovado",
    },
    {
      id: 3,
      studentName: "Pedro Lima",
      course: "Análise e Desenvolvimento de Sistemas",
      semester: "4º Semestre",
      classification: "🥈 Intermediário",
      score: 7.8,
      avatar: "/placeholder.svg?height=40&width=40&text=PL",
      appliedFor: "Estagiário Desenvolvedor Back-end",
      appliedDate: "2024-02-12",
      skills: ["Java", "Spring Boot", "MySQL", "Git"],
      projects: 3,
      aiCompatibility: 75,
      status: "Em Análise",
    },
  ])

  // Lista de eventos com presença
  const [eventsWithAttendance, setEventsWithAttendance] = useState([
    {
      id: 1,
      title: "Workshop React Avançado",
      date: "2024-02-15",
      type: "workshop",
      attendees: [
        { name: "João Silva", rm: "2024001", present: true },
        { name: "Maria Santos", rm: "2024002", present: true },
        { name: "Pedro Lima", rm: "2024003", present: false },
        { name: "Ana Costa", rm: "2024004", present: true },
      ],
    },
    {
      id: 2,
      title: "Palestra: Futuro da IA",
      date: "2024-02-20",
      type: "palestra",
      attendees: [
        { name: "João Silva", rm: "2024001", present: false },
        { name: "Maria Santos", rm: "2024002", present: true },
        { name: "Pedro Lima", rm: "2024003", present: true },
        { name: "Ana Costa", rm: "2024004", present: true },
      ],
    },
  ])

  // Adicionar após os outros estados
  const [studentClassification, setStudentClassification] = useState({
    level: "Avançado", // Iniciante, Intermediário, Avançado, Expert, Formado
    score: 8.7,
    badge: "🥇",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    factors: {
      workQuality: 8.5,
      socialEngagement: 9.2,
      tccProgress: 8.0,
      writingQuality: 8.9,
      professionalSkills: 8.3,
      videoQuality: 8.8, // Novo fator para vídeos
      attendanceRate: 9.1, // Novo fator para presença em eventos
    },
    strengths: ["Excelente comunicação", "Código limpo", "Trabalho em equipe", "Criação de conteúdo"],
    improvements: ["Documentação técnica", "Testes unitários"],
  })

  const [curriculumData, setCurriculumData] = useState({
    personalInfo: {
      name: userProfile.name,
      email: "joao.silva@etec.sp.gov.br",
      phone: "(11) 99999-9999",
      linkedin: "linkedin.com/in/joaosilva",
      github: "github.com/joaosilva",
    },
    skills: ["React", "Node.js", "Python", "SQL", "Git"],
    projects: [
      {
        title: "Sistema de Gestão Escolar",
        description: "Aplicação web completa para gerenciamento de escola",
        technologies: ["React", "Node.js", "MySQL"],
        aiScore: 8.5,
      },
    ],
    certifications: ["Curso de React - ETEC", "Fundamentos de Banco de Dados"],
    languages: ["Português (Nativo)", "Inglês (Intermediário)"],
  })

  const assignments = [
    { id: 1, title: "Projeto de Banco de Dados", dueDate: "2024-02-15", status: "pending", timeLeft: "3 dias" },
    { id: 2, title: "Algoritmos de Ordenação", dueDate: "2024-02-20", status: "submitted", timeLeft: "8 dias" },
    { id: 3, title: "Interface Web Responsiva", dueDate: "2024-02-25", status: "pending", timeLeft: "13 dias" },
  ]

  const tccIdeas = [
    { id: 1, title: "Sistema de Gestão Escolar", votes: 15, category: "Web Development" },
    { id: 2, title: "App de Controle Financeiro", votes: 12, category: "Mobile Development" },
    { id: 3, title: "IA para Análise de Dados", votes: 8, category: "Data Science" },
  ]

  const events = [
    { date: "2024-02-18", title: "Feira de Tecnologia", type: "feira" },
    { date: "2024-02-22", title: "Prova de Programação", type: "prova" },
    { date: "2024-02-28", title: "Workshop React", type: "workshop" },
  ]

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Ana Costa",
      avatar: "/placeholder.svg?height=40&width=40&text=AC",
      time: "2h atrás",
      content: "Acabei de finalizar meu projeto de e-commerce! 🛒✨",
      image: "/placeholder.svg?height=300&width=400&text=E-commerce+Project",
      likes: {
        students: 15, // Bronze
        teachers: 3, // Prata
        partners: 2, // Ouro
        graduates: 1, // Diamante
      },
      comments: 8,
      type: "photo",
      userType: "graduate",
    },
    {
      id: 2,
      author: "Carlos Silva",
      avatar: "/placeholder.svg?height=40&width=40&text=CS",
      time: "4h atrás",
      content: "Primeira vez programando em Python! Que linguagem incrível 🐍",
      image: "/placeholder.svg?height=300&width=400&text=Python+Code",
      likes: {
        students: 12,
        teachers: 4,
        partners: 1,
        graduates: 2,
      },
      comments: 5,
      type: "work",
      userType: "student",
    },
    {
      id: 3,
      author: "Beatriz Santos",
      avatar: "/placeholder.svg?height=40&width=40&text=BS",
      time: "6h atrás",
      content: "Dia de apresentação do TCC! Nervosa mas animada 🎓",
      image: "/placeholder.svg?height=300&width=400&text=TCC+Presentation",
      likes: {
        students: 28,
        teachers: 8,
        partners: 5,
        graduates: 3,
      },
      comments: 12,
      type: "milestone",
      userType: "student",
    },
  ])

  const [workSubmissions, setWorkSubmissions] = useState([
    {
      id: 1,
      author: "João Silva",
      title: "Sistema de Gestão Escolar",
      description: "Aplicação web completa para gerenciamento de escola",
      image: "/placeholder.svg?height=200&width=300&text=School+Management",
      likes: {
        students: 18,
        teachers: 6,
        partners: 4,
        graduates: 2,
      },
      comments: 7,
      aiScore: 8.5,
      tags: ["React", "Node.js", "MySQL"],
    },
    {
      id: 2,
      author: "Maria Santos",
      title: "App de Controle Financeiro",
      description: "Aplicativo mobile para controle de gastos pessoais",
      image: "/placeholder.svg?height=200&width=300&text=Finance+App",
      likes: {
        students: 16,
        teachers: 5,
        partners: 3,
        graduates: 1,
      },
      comments: 5,
      aiScore: 9.1,
      tags: ["React Native", "Firebase"],
    },
  ])

  const [internshipVacancies, setInternshipVacancies] = useState([
    {
      id: 1,
      company: "Tech Solutions Ltda.",
      role: "Estagiário Desenvolvedor Front-end",
      description: "Buscamos estagiário para atuar com React e Next.js.",
      requirements: "Conhecimento em HTML, CSS, JavaScript e React.",
      location: "São Paulo - SP",
      link: "#",
    },
    {
      id: 2,
      company: "Data Insights S.A.",
      role: "Estagiário Analista de Dados",
      description: "Oportunidade para atuar com análise de dados e SQL.",
      requirements: "Conhecimento em SQL, Python e Excel.",
      location: "Remoto",
      link: "#",
    },
  ])

  const [lectureInvitations, setLectureInvitations] = useState([
    {
      id: 1,
      company: "Inovatech",
      title: "O Futuro da Inteligência Artificial no Desenvolvimento",
      date: "2024-03-10",
      time: "19:00",
      speaker: "Dr. Ana Paula Mendes",
      link: "#",
    },
    {
      id: 2,
      company: "CyberSec Corp.",
      title: "Segurança da Informação para Desenvolvedores",
      date: "2024-03-25",
      time: "14:00",
      speaker: "Eng. Ricardo Almeida",
      link: "#",
    },
  ])

  const [companyVisits, setCompanyVisits] = useState([
    {
      id: 1,
      company: "Global Software",
      date: "2024-04-05",
      time: "10:00",
      description: "Visita guiada à sede da empresa e bate-papo com desenvolvedores.",
      slots: 20,
      registered: 12,
    },
    {
      id: 2,
      company: "Cloud Innovations",
      date: "2024-04-15",
      time: "15:00",
      description: "Conheça nossa infraestrutura de cloud e projetos de ponta.",
      slots: 15,
      registered: 5,
    },
  ])

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Introdução ao React Hooks",
      author: "Lucas Fernandes",
      avatar: "/placeholder.svg?height=30&width=30&text=LF",
      thumbnail: "/placeholder.svg?height=150&width=250&text=React+Hooks",
      views: "1.2K",
      likes: {
        students: 45, // Bronze
        teachers: 12, // Prata
        partners: 8, // Ouro
        graduates: 5, // Diamante
      },
      comments: 12,
      duration: "15:30",
      videoUrl: "https://www.youtube.com/watch?v=dpw9EHGf_1Q",
      aiScore: 8.9,
      userType: "student",
    },
    {
      id: 2,
      title: "Desvendando o SQL: Joins e Subqueries",
      author: "Mariana Oliveira",
      avatar: "/placeholder.svg?height=30&width=30&text=MO",
      thumbnail: "/placeholder.svg?height=150&width=250&text=SQL+Joins",
      views: "980",
      likes: {
        students: 32,
        teachers: 15,
        partners: 6,
        graduates: 3,
      },
      comments: 8,
      duration: "10:45",
      videoUrl: "https://www.youtube.com/watch?v=dpw9EHGf_1Q",
      aiScore: 9.2,
      userType: "teacher",
    },
    {
      id: 3,
      title: "Primeiros Passos com Node.js e Express",
      author: "Gabriel Costa",
      avatar: "/placeholder.svg?height=30&width=30&text=GC",
      thumbnail: "/placeholder.svg?height=150&width=250&text=Node.js+Express",
      views: "1.5K",
      likes: {
        students: 58,
        teachers: 18,
        partners: 12,
        graduates: 7,
      },
      comments: 15,
      duration: "20:00",
      videoUrl: "https://www.youtube.com/watch?v=dpw9EHGf_1Q",
      aiScore: 8.7,
      userType: "graduate",
    },
  ])

  // Adicionar função para calcular classificação
  const calculateStudentClassification = () => {
    const factors = studentClassification.factors
    const weights = {
      workQuality: 0.2,
      socialEngagement: 0.1,
      tccProgress: 0.2,
      writingQuality: 0.15,
      professionalSkills: 0.15,
      videoQuality: 0.1,
      attendanceRate: 0.1,
    }

    const totalScore =
      factors.workQuality * weights.workQuality +
      factors.socialEngagement * weights.socialEngagement +
      factors.tccProgress * weights.tccProgress +
      factors.writingQuality * weights.writingQuality +
      factors.professionalSkills * weights.professionalSkills +
      factors.videoQuality * weights.videoQuality +
      factors.attendanceRate * weights.attendanceRate

    let level, badge, color, bgColor

    if (userType === "graduate") {
      level = "Formado"
      badge = "💎"
      color = "text-purple-600"
      bgColor = "bg-purple-50"
    } else if (totalScore >= 9.0) {
      level = "Expert"
      badge = "👑"
      color = "text-purple-600"
      bgColor = "bg-purple-50"
    } else if (totalScore >= 8.0) {
      level = "Avançado"
      badge = "🥇"
      color = "text-yellow-600"
      bgColor = "bg-yellow-50"
    } else if (totalScore >= 6.5) {
      level = "Intermediário"
      badge = "🥈"
      color = "text-gray-600"
      bgColor = "bg-gray-50"
    } else {
      level = "Iniciante"
      badge = "🥉"
      color = "text-orange-600"
      bgColor = "bg-orange-50"
    }

    return { level, badge, color, bgColor, score: totalScore }
  }

  const handleCoverImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUserProfile((prev) => ({ ...prev, coverImage: imageUrl }))
    }
  }

  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setUserProfile((prev) => ({ ...prev, avatar: imageUrl }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setUserProfile((prev) => ({ ...prev, [id]: value }))
  }

  const handleRegister = () => {
    // Aqui você implementaria a lógica de cadastro
    console.log("Cadastrando usuário:", registerType, registerData)
    setShowRegisterModal(false)
    setUserType(registerType as any)
  }

  const handleAttendanceChange = (eventId: number, studentRm: string, present: boolean) => {
    setEventsWithAttendance((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              attendees: event.attendees.map((attendee) =>
                attendee.rm === studentRm ? { ...attendee, present } : attendee,
              ),
            }
          : event,
      ),
    )
  }

  // Menu items para navegação mobile
  const menuItems = [
    { id: "feed", label: "Feed", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: TrendingUp },
    { id: "trabalhos", label: "Trabalhos", icon: FileText },
    { id: "tcc", label: "TCC & Ideias", icon: Award },
    { id: "agenda", label: "Agenda", icon: CalendarIcon },
    { id: "comunidade", label: "Comunidade", icon: Users },
    { id: "parceiros", label: "Parceiros", icon: Briefcase },
    { id: "videos", label: "Vídeos", icon: Video },
    { id: "formandos", label: "Formandos", icon: GraduationCap },
    { id: "perfil", label: "Perfil", icon: User },
  ]

  // Modal de Cadastro
  const RegisterModal = () =>
    showRegisterModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Cadastrar Novo Usuário</span>
              <Button variant="ghost" size="icon" onClick={() => setShowRegisterModal(false)}>
                ×
              </Button>
            </CardTitle>
            <CardDescription>Selecione o tipo de usuário e preencha os dados</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!registerType ? (
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-16 flex items-center gap-3 bg-transparent"
                  onClick={() => setRegisterType("student")}
                >
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  <div className="text-left">
                    <p className="font-medium">Aluno</p>
                    <p className="text-sm text-gray-600">Estudante da ETEC</p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-16 flex items-center gap-3 bg-transparent"
                  onClick={() => setRegisterType("teacher")}
                >
                  <BookOpen className="h-6 w-6 text-green-600" />
                  <div className="text-left">
                    <p className="font-medium">Professor/Corpo Docente</p>
                    <p className="text-sm text-gray-600">Educador da ETEC</p>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-16 flex items-center gap-3 bg-transparent"
                  onClick={() => setRegisterType("partner")}
                >
                  <Building className="h-6 w-6 text-purple-600" />
                  <div className="text-left">
                    <p className="font-medium">Empresa/Parceiro</p>
                    <p className="text-sm text-gray-600">Empresa parceira</p>
                  </div>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start p-0 h-auto"
                  onClick={() => setRegisterType(null)}
                >
                  ← Voltar
                </Button>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">Nome Completo</Label>
                    <Input
                      id="register-name"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      placeholder={
                        registerType === "student"
                          ? "seu.email@etec.sp.gov.br"
                          : registerType === "teacher"
                            ? "professor@etec.sp.gov.br"
                            : "contato@empresa.com.br"
                      }
                    />
                  </div>

                  {registerType === "student" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="register-rm">RM do Aluno</Label>
                        <Input
                          id="register-rm"
                          value={registerData.rm}
                          onChange={(e) => setRegisterData({ ...registerData, rm: e.target.value })}
                          placeholder="Ex: 2024001"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-username">Nome de Usuário</Label>
                        <Input
                          id="register-username"
                          value={registerData.username}
                          onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                          placeholder="Ex: joao.silva"
                        />
                      </div>
                    </>
                  )}

                  {registerType === "teacher" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="register-institutional-id">ID Institucional</Label>
                        <Input
                          id="register-institutional-id"
                          value={registerData.institutionalId}
                          onChange={(e) => setRegisterData({ ...registerData, institutionalId: e.target.value })}
                          placeholder="Ex: PROF001"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-department">Departamento</Label>
                        <Input
                          id="register-department"
                          value={registerData.department}
                          onChange={(e) => setRegisterData({ ...registerData, department: e.target.value })}
                          placeholder="Ex: Informática"
                        />
                      </div>
                    </>
                  )}

                  {registerType === "partner" && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="register-cnpj">CNPJ</Label>
                        <Input
                          id="register-cnpj"
                          value={registerData.cnpj}
                          onChange={(e) => setRegisterData({ ...registerData, cnpj: e.target.value })}
                          placeholder="XX.XXX.XXX/XXXX-XX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="register-company-name">Nome da Empresa</Label>
                        <Input
                          id="register-company-name"
                          value={registerData.companyName}
                          onChange={(e) => setRegisterData({ ...registerData, companyName: e.target.value })}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Senha</Label>
                    <Input
                      id="register-password"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      placeholder="Sua senha"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Confirmar Senha</Label>
                    <Input
                      id="register-confirm-password"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      placeholder="Confirme sua senha"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => setShowRegisterModal(false)}
                  >
                    Cancelar
                  </Button>
                  <Button className="flex-1" onClick={handleRegister}>
                    Cadastrar
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )

  // Modal de Envio de Currículo
  const [showCurriculumModal, setShowCurriculumModal] = useState(false)

  const CurriculumModal = () =>
    showCurriculumModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Enviar Currículo</span>
              <Button variant="ghost" size="icon" onClick={() => setShowCurriculumModal(false)}>
                ×
              </Button>
            </CardTitle>
            <CardDescription>
              Seu currículo será enviado automaticamente com base no seu perfil e classificação IA
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Preview do Currículo */}
            <div className="p-4 bg-gray-50 rounded-lg space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{curriculumData.personalInfo.name}</h3>
                  <p className="text-sm text-gray-600">{userProfile.course}</p>
                  <div
                    className={`inline-flex items-center gap-1 ${studentClassification.bgColor} px-2 py-1 rounded-full mt-1`}
                  >
                    <span className="text-sm">{studentClassification.badge}</span>
                    <span className={`text-xs font-medium ${studentClassification.color}`}>
                      {studentClassification.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>Email:</strong> {curriculumData.personalInfo.email}
                  </p>
                  <p>
                    <strong>Telefone:</strong> {curriculumData.personalInfo.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>LinkedIn:</strong> {curriculumData.personalInfo.linkedin}
                  </p>
                  <p>
                    <strong>GitHub:</strong> {curriculumData.personalInfo.github}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Principais Habilidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {curriculumData.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Projetos Destacados:</h4>
                {curriculumData.projects.map((project, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-medium">{project.title}</p>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs">{project.aiScore}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mensagem Personalizada */}
            <div className="space-y-2">
              <Label htmlFor="cover-letter">Mensagem Personalizada (Opcional)</Label>
              <Textarea id="cover-letter" placeholder="Escreva uma mensagem personalizada para a empresa..." rows={4} />
            </div>

            {/* Botões */}
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowCurriculumModal(false)}>
                Cancelar
              </Button>
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                <User className="h-4 w-4 mr-2" />
                Enviar Currículo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )

  // Componente de Barra Rolante dos Top Students
  const TopStudentsScroll = () => (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trophy className="h-5 w-5 text-yellow-600" />
          Ranking de Classificações
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <div className="flex gap-3 p-4 min-w-max">
            {topStudents.map((student, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback className="text-xs">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-sm truncate">{student.name}</p>
                  <p className="text-xs text-gray-600">{student.course}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">{student.classification}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="text-xs font-bold">{student.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (userType === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm mx-4">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-xl font-bold text-blue-900">DevConnect ETEC</CardTitle>
            <CardDescription className="text-sm">Sua rede social acadêmica da ETEC</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email/RM/CNPJ
              </Label>
              <Input
                id="email"
                type="text"
                placeholder="seu.email@etec.sp.gov.br ou RM ou CNPJ"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Sua senha"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="h-12"
              />
            </div>
            <Button
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-base"
              onClick={() => setUserType("student")}
            >
              Entrar
            </Button>

            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">ou</span>
            </div>

            <Button
              variant="outline"
              className="w-full h-12 bg-transparent text-base"
              onClick={() => setShowRegisterModal(true)}
            >
              <UserPlus className="mr-2 h-5 w-5" />
              Cadastrar Novo Usuário
            </Button>

            <p className="text-xs text-center text-gray-600 px-2">
              Acesso para alunos, professores e empresas parceiras da ETEC
            </p>
          </CardContent>
        </Card>
        <RegisterModal />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <RegisterModal />
      <CurriculumModal />

      {/* Mobile Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-blue-900">DevConnect ETEC</h2>
                          <p className="text-sm text-gray-600">{userProfile.name}</p>
                        </div>
                      </div>
                    </div>
                    <nav className="flex-1 p-4">
                      <div className="space-y-2">
                        {menuItems.map((item) => {
                          const Icon = item.icon
                          return (
                            <Button
                              key={item.id}
                              variant={activeTab === item.id ? "default" : "ghost"}
                              className="w-full justify-start h-12 text-base"
                              onClick={() => {
                                setActiveTab(item.id)
                                setIsMenuOpen(false)
                              }}
                            >
                              <Icon className="h-5 w-5 mr-3" />
                              {item.label}
                            </Button>
                          )
                        })}
                        {userType === "staff" && (
                          <Button
                            variant={activeTab === "admin" ? "default" : "ghost"}
                            className="w-full justify-start h-12 text-base"
                            onClick={() => {
                              setActiveTab("admin")
                              setIsMenuOpen(false)
                            }}
                          >
                            <Settings className="h-5 w-5 mr-3" />
                            Administração
                          </Button>
                        )}
                      </div>
                    </nav>
                    <div className="p-4 border-t">
                      <Button
                        variant="outline"
                        className="w-full h-12 bg-transparent"
                        onClick={() => setUserType(null)}
                      >
                        Sair
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-blue-900 hidden sm:block">DevConnect ETEC</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                {/* Selo de Classificação */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-xs">{studentClassification.badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 gap-1">
            <TabsTrigger value="feed" className="text-xs">
              Feed
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="text-xs">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="trabalhos" className="text-xs">
              Trabalhos
            </TabsTrigger>
            <TabsTrigger value="tcc" className="text-xs">
              TCC
            </TabsTrigger>
            <TabsTrigger value="agenda" className="text-xs">
              Agenda
            </TabsTrigger>
            <TabsTrigger value="comunidade" className="text-xs">
              Comunidade
            </TabsTrigger>
            <TabsTrigger value="parceiros" className="text-xs">
              Parceiros
            </TabsTrigger>
            <TabsTrigger value="videos" className="text-xs">
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="formandos" className="text-xs">
              Formandos
            </TabsTrigger>
            <TabsTrigger value="perfil" className="text-xs">
              Perfil
            </TabsTrigger>
            {userType === "staff" && (
              <TabsTrigger value="admin" className="text-xs">
                Admin
              </TabsTrigger>
            )}
          </TabsList>
        </Tabs>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20 md:pb-8 max-w-7xl mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          {/* Feed Social */}
          <TabsContent value="feed" className="space-y-4 mt-4">
            {/* Barra Rolante dos Top Students */}
            <TopStudentsScroll />

            {/* Criar Post - Mobile Optimized */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Compartilhe suas conquistas, projetos ou dúvidas..."
                    rows={3}
                    className="flex-1 text-base"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-10 bg-transparent">
                      <Upload className="h-4 w-4 mr-1" />
                      Foto
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 bg-transparent">
                      <FileText className="h-4 w-4 mr-1" />
                      Trabalho
                    </Button>
                    <Button variant="outline" size="sm" className="h-10 bg-transparent">
                      <Video className="h-4 w-4 mr-1" />
                      Vídeo
                    </Button>
                  </div>
                  <Button size="sm" className="h-10 px-6">
                    Publicar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts do Feed - Mobile Optimized */}
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-0">
                  {/* Header do Post */}
                  <div className="p-4 pb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                        <AvatarFallback>
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium text-base">{post.author}</p>
                          {post.userType === "graduate" && (
                            <Badge variant="secondary" className="bg-purple-50 text-purple-700 text-xs">
                              💎 Formado
                            </Badge>
                          )}
                          {post.userType === "teacher" && (
                            <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                              👨‍🏫 Professor
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{post.time}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {post.type === "photo" ? "📸" : post.type === "work" ? "💻" : "🎓"}
                      </Badge>
                    </div>
                    <p className="mb-3 text-base leading-relaxed">{post.content}</p>
                  </div>

                  {/* Imagem do Post */}
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post"
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-95 transition-opacity"
                    />
                  </div>

                  {/* Ações do Post */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        {/* Curtidas Categorizadas */}
                        <div className="flex items-center gap-3">
                          {/* Curtidas Diamante - Formandos */}
                          {post.likes.graduates > 0 && (
                            <button className="flex items-center gap-1 text-purple-600 hover:text-purple-700 active:scale-95 transition-transform">
                              <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="text-sm font-medium">{post.likes.graduates}</span>
                                <span className="text-xs">💎</span>
                              </div>
                            </button>
                          )}

                          {/* Curtidas Ouro - Parceiros */}
                          {post.likes.partners > 0 && (
                            <button className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 active:scale-95 transition-transform">
                              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="text-sm font-medium">{post.likes.partners}</span>
                                <span className="text-xs">🥇</span>
                              </div>
                            </button>
                          )}

                          {/* Curtidas Prata - Professores */}
                          {post.likes.teachers > 0 && (
                            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-700 active:scale-95 transition-transform">
                              <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="text-sm font-medium">{post.likes.teachers}</span>
                                <span className="text-xs">🥈</span>
                              </div>
                            </button>
                          )}

                          {/* Curtidas Bronze - Alunos */}
                          {post.likes.students > 0 && (
                            <button className="flex items-center gap-1 text-orange-600 hover:text-orange-700 active:scale-95 transition-transform">
                              <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full">
                                <ThumbsUp className="h-4 w-4" />
                                <span className="text-sm font-medium">{post.likes.students}</span>
                                <span className="text-xs">🥉</span>
                              </div>
                            </button>
                          )}
                        </div>

                        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 active:scale-95 transition-transform">
                          <MessageSquare className="h-6 w-6" />
                          <span className="text-base">{post.comments}</span>
                        </button>
                      </div>
                    </div>

                    {/* Resumo de Curtidas */}
                    <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Total de curtidas:</span>
                        <span className="font-medium">
                          {post.likes.students + post.likes.teachers + post.likes.partners + post.likes.graduates}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                        <span>💎 Formandos: {post.likes.graduates}</span>
                        <span>🥇 Parceiros: {post.likes.partners}</span>
                        <span>🥈 Professores: {post.likes.teachers}</span>
                        <span>🥉 Alunos: {post.likes.students}</span>
                      </div>
                    </div>

                    {/* Comentários */}
                    <div className="space-y-3 pt-3 border-t">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">MJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 bg-gray-50 rounded-lg p-3">
                          <p className="text-sm">
                            <span className="font-medium">Maria João:</span> Parabéns! Ficou incrível! 👏
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                          <AvatarFallback className="text-xs">JS</AvatarFallback>
                        </Avatar>
                        <Input placeholder="Escreva um comentário..." className="flex-1 h-10 text-base" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Legenda do Sistema de Curtidas */}
            <Card>
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <h4 className="font-medium text-base">Sistema de Curtidas por Categoria</h4>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-xs">💎</span>
                      <span className="text-purple-600 font-medium">Formandos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">🥇</span>
                      <span className="text-yellow-600 font-medium">Parceiros</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">🥈</span>
                      <span className="text-gray-600 font-medium">Professores</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs">🥉</span>
                      <span className="text-orange-600 font-medium">Alunos</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">Curtidas de formandos têm o maior valor!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dashboard - Mobile Optimized */}
          <TabsContent value="dashboard" className="space-y-4 mt-4">
            {/* Barra Rolante dos Top Students */}
            <TopStudentsScroll />

            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">Trabalhos Pendentes</CardTitle>
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">2</div>
                  <p className="text-sm text-muted-foreground">Próximo prazo em 3 dias</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">Análises IA</CardTitle>
                  <Brain className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8</div>
                  <p className="text-sm text-muted-foreground">Trabalhos analisados este mês</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">Progresso TCC</CardTitle>
                  <TrendingUp className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">65%</div>
                  <Progress value={65} className="mt-3" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-base font-medium">Vídeos Publicados</CardTitle>
                  <Video className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{userProfile.videoStats.totalVideos}</div>
                  <p className="text-sm text-muted-foreground">
                    {userProfile.videoStats.totalViews} visualizações totais
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Timer className="h-5 w-5" />
                  Próximas Entregas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {assignments
                  .filter((a) => a.status === "pending")
                  .map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium text-base">{assignment.title}</p>
                        <p className="text-sm text-gray-600">
                          Prazo: {format(new Date(assignment.dueDate), "dd/MM/yyyy", { locale: ptBR })}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-600 ml-2">
                        {assignment.timeLeft}
                      </Badge>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CalendarIcon className="h-5 w-5" />
                  Próximos Eventos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-base">{event.title}</p>
                      <p className="text-sm text-gray-600">
                        {format(new Date(event.date), "dd/MM/yyyy", { locale: ptBR })}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trabalhos - Mobile Optimized */}
          <TabsContent value="trabalhos" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Upload className="h-5 w-5" />
                  Enviar Trabalho para Análise IA
                </CardTitle>
                <CardDescription>Faça upload do seu trabalho e receba feedback inteligente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-base">
                      Título do Trabalho
                    </Label>
                    <Input id="title" placeholder="Ex: Sistema de Gestão de Biblioteca" className="h-12 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base">
                      Disciplina
                    </Label>
                    <Select>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Selecione a disciplina" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bd">Banco de Dados</SelectItem>
                        <SelectItem value="prog">Programação</SelectItem>
                        <SelectItem value="web">Desenvolvimento Web</SelectItem>
                        <SelectItem value="mobile">Desenvolvimento Mobile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">
                    Descrição
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva brevemente seu trabalho..."
                    rows={4}
                    className="text-base"
                  />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-base text-gray-600">Toque para selecionar arquivos</p>
                  <p className="text-sm text-gray-500">Suporta: .pdf, .docx, .zip, .rar (máx. 50MB)</p>
                </div>
                <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-base">
                  <Brain className="mr-2 h-5 w-5" />
                  Analisar com IA
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5" />
                  Galeria de Trabalhos da Turma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {workSubmissions.map((work) => (
                    <div key={work.id} className="border rounded-lg overflow-hidden">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="w-full h-48 object-cover cursor-pointer hover:opacity-95"
                      />
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{work.title}</h3>
                            <p className="text-base text-gray-600 mb-2">{work.description}</p>
                            <p className="text-sm text-gray-500">por {work.author}</p>
                          </div>
                          <div className="flex items-center gap-1 bg-green-50 px-3 py-2 rounded ml-3">
                            <Brain className="h-4 w-4 text-green-600" />
                            <span className="text-base font-medium text-green-600">{work.aiScore}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {work.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-sm">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t">
                          <div className="flex items-center gap-4">
                            {/* Sistema de Curtidas Categorizadas */}
                            <div className="flex items-center gap-2">
                              {/* Botão para curtir como aluno (Bronze) */}
                              <button className="flex items-center gap-1 bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-full active:scale-95 transition-transform">
                                <ThumbsUp className="h-4 w-4 text-orange-600" />
                                <span className="text-sm font-medium text-orange-600">{work.likes.students}</span>
                                <span className="text-xs">🥉</span>
                              </button>

                              {/* Mostrar curtidas de professores se houver */}
                              {work.likes.teachers > 0 && (
                                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                                  <ThumbsUp className="h-4 w-4 text-gray-600" />
                                  <span className="text-sm font-medium text-gray-600">{work.likes.teachers}</span>
                                  <span className="text-xs">🥈</span>
                                </div>
                              )}

                              {/* Mostrar curtidas de parceiros se houver */}
                              {work.likes.partners > 0 && (
                                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                                  <ThumbsUp className="h-4 w-4 text-yellow-600" />
                                  <span className="text-sm font-medium text-yellow-600">{work.likes.partners}</span>
                                  <span className="text-xs">🥇</span>
                                </div>
                              )}

                              {/* Mostrar curtidas de formandos se houver */}
                              {work.likes.graduates > 0 && (
                                <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full">
                                  <ThumbsUp className="h-4 w-4 text-purple-600" />
                                  <span className="text-sm font-medium text-purple-600">{work.likes.graduates}</span>
                                  <span className="text-xs">💎</span>
                                </div>
                              )}
                            </div>

                            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 active:scale-95 transition-transform">
                              <MessageSquare className="h-5 w-5" />
                              <span className="text-base">{work.comments}</span>
                            </button>
                          </div>
                          <Button variant="outline" size="sm" className="h-10 bg-transparent">
                            Ver Detalhes
                          </Button>
                        </div>

                        {/* Resumo de Curtidas por Categoria */}
                        <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                          <div className="text-xs text-gray-600 text-center">
                            Total:{" "}
                            {work.likes.students + work.likes.teachers + work.likes.partners + work.likes.graduates}{" "}
                            curtidas
                            {work.likes.graduates > 0 && (
                              <span className="ml-2 text-purple-600 font-medium">• Reconhecido por formandos! 💎</span>
                            )}
                            {work.likes.partners > 0 && (
                              <span className="ml-2 text-yellow-600 font-medium">• Reconhecido por parceiros! 🥇</span>
                            )}
                            {work.likes.teachers > 0 && (
                              <span className="ml-2 text-gray-600 font-medium">• Aprovado por professores! 🥈</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TCC & Ideias - Mobile Optimized */}
          <TabsContent value="tcc" className="space-y-4 mt-4">
            {/* Gerenciamento do Grupo TCC */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5" />
                  Meu Grupo de TCC
                </CardTitle>
                <CardDescription>Gerencie os membros do seu grupo de Trabalho de Conclusão de Curso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Lista de Membros Selecionados */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base">Membros do Grupo:</h4>
                  <div className="space-y-2">
                    {[
                      {
                        name: "João Silva",
                        id: "joao",
                        selected: true,
                        role: "Líder",
                        avatar: "/placeholder.svg?height=40&width=40&text=JS",
                      },
                      {
                        name: "Maria Santos",
                        id: "maria",
                        selected: true,
                        role: "Desenvolvedora",
                        avatar: "/placeholder.svg?height=40&width=40&text=MS",
                      },
                      {
                        name: "Pedro Lima",
                        id: "pedro",
                        selected: true,
                        role: "Analista",
                        avatar: "/placeholder.svg?height=40&width=40&text=PL",
                      },
                    ].map((member) => (
                      <div key={member.id} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-base">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        <Badge variant="secondary">Confirmado</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Adicionar Novos Membros */}
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-medium text-base">Convidar Alunos:</h4>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Selecione um aluno da turma" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ana">Ana Costa - Desenvolvimento Frontend</SelectItem>
                        <SelectItem value="carlos">Carlos Silva - Banco de Dados</SelectItem>
                        <SelectItem value="beatriz">Beatriz Santos - Design UX/UI</SelectItem>
                        <SelectItem value="lucas">Lucas Fernandes - Backend</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button className="w-full h-12 text-base bg-transparent" variant="outline">
                      <Plus className="mr-2 h-5 w-5" />
                      Enviar Convite
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progresso Individual do TCC */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5" />
                  Progresso do TCC - Grupo
                </CardTitle>
                <CardDescription>Acompanhe o progresso de cada membro do grupo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span>Progresso Geral do Grupo</span>
                    <span className="font-bold">45%</span>
                  </div>
                  <Progress value={45} className="h-3" />
                </div>

                {/* Progresso por Membro */}
                <div className="space-y-4">
                  {[
                    { name: "João Silva", progress: 65, role: "Introdução e Metodologia", color: "bg-blue-500" },
                    { name: "Maria Santos", progress: 40, role: "Desenvolvimento e Testes", color: "bg-green-500" },
                    { name: "Pedro Lima", progress: 30, role: "Análise e Conclusão", color: "bg-purple-500" },
                  ].map((member, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-base">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        <span className="text-sm font-bold">{member.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${member.color}`}
                          style={{ width: `${member.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upload de Partes do TCC */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Upload className="h-5 w-5" />
                  Minha Parte do TCC
                </CardTitle>
                <CardDescription>Faça upload da sua parte do Trabalho de Conclusão de Curso</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tcc-section" className="text-base">
                    Seção Responsável
                  </Label>
                  <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Selecione sua seção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="introducao">1. Introdução</SelectItem>
                      <SelectItem value="revisao">2. Revisão Bibliográfica</SelectItem>
                      <SelectItem value="metodologia">3. Metodologia</SelectItem>
                      <SelectItem value="desenvolvimento">4. Desenvolvimento</SelectItem>
                      <SelectItem value="testes">5. Testes e Validação</SelectItem>
                      <SelectItem value="conclusao">6. Conclusão</SelectItem>
                      <SelectItem value="referencias">7. Referências</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tcc-description" className="text-base">
                    Descrição da Seção
                  </Label>
                  <Textarea
                    id="tcc-description"
                    placeholder="Descreva brevemente o conteúdo da sua seção..."
                    rows={3}
                    className="text-base"
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-base text-gray-600">Toque para selecionar sua parte do TCC</p>
                  <p className="text-sm text-gray-500">Suporta: .pdf, .docx (máx. 50MB)</p>
                </div>

                <Button className="w-full h-12 text-base">
                  <Upload className="mr-2 h-5 w-5" />
                  Enviar Minha Parte
                </Button>

                {/* Partes já enviadas */}
                <div className="space-y-3 pt-4 border-t">
                  <h4 className="font-medium text-base">Partes Enviadas:</h4>
                  <div className="space-y-2">
                    {[
                      { section: "1. Introdução", author: "João Silva", date: "15/02/2024", status: "Aprovado" },
                      { section: "3. Metodologia", author: "João Silva", date: "10/02/2024", status: "Em Revisão" },
                    ].map((part, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-base">{part.section}</p>
                          <p className="text-sm text-gray-600">
                            por {part.author} • {part.date}
                          </p>
                        </div>
                        <Badge variant={part.status === "Aprovado" ? "default" : "secondary"}>{part.status}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Votação de Ideias - Mantido do código original */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <ThumbsUp className="h-5 w-5" />
                  Votação de Ideias para TCC
                </CardTitle>
                <CardDescription>Vote nas melhores ideias para TCC da turma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {tccIdeas.map((idea) => (
                  <div key={idea.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium text-base">{idea.title}</p>
                      <Badge variant="outline" className="mt-1">
                        {idea.category}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="h-10 ml-3 bg-transparent">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {idea.votes}
                    </Button>
                  </div>
                ))}

                <Button variant="outline" className="w-full h-12 bg-transparent text-base">
                  <Plus className="mr-2 h-5 w-5" />
                  Propor Nova Ideia
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Agenda - Mobile Optimized */}
          <TabsContent value="agenda" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calendário Acadêmico</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={ptBR}
                  className="rounded-md border w-full"
                />
              </CardContent>
            </Card>

            {/* Controle de Presença para Professores/Staff */}
            {(userType === "teacher" || userType === "staff") && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CheckCircle className="h-5 w-5" />
                    Controle de Presença
                  </CardTitle>
                  <CardDescription>Marque a presença dos alunos nos eventos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {eventsWithAttendance.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium text-base">{event.title}</h3>
                          <p className="text-sm text-gray-600">
                            {format(new Date(event.date), "dd/MM/yyyy", { locale: ptBR })}
                          </p>
                        </div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Lista de Presença:</h4>
                        {event.attendees.map((attendee) => (
                          <div key={attendee.rm} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                            <div>
                              <p className="font-medium text-sm">{attendee.name}</p>
                              <p className="text-xs text-gray-600">RM: {attendee.rm}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Checkbox
                                checked={attendee.present}
                                onCheckedChange={(checked) =>
                                  handleAttendanceChange(event.id, attendee.rm, checked as boolean)
                                }
                              />
                              <span className="text-sm">{attendee.present ? "Presente" : "Ausente"}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 p-2 bg-blue-50 rounded">
                        <p className="text-sm text-blue-800">
                          Presentes: {event.attendees.filter((a) => a.present).length} / {event.attendees.length}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Próximos Eventos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {format(new Date(event.date), "dd")}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-base">{event.title}</p>
                      <p className="text-sm text-gray-600">
                        {format(new Date(event.date), "EEEE, dd 'de' MMMM", { locale: ptBR })}
                      </p>
                      <Badge variant="outline" className="mt-1">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Adicionar Evento Pessoal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-title" className="text-base">
                      Título do Evento
                    </Label>
                    <Input id="event-title" placeholder="Ex: Reunião de grupo" className="h-12 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base">Data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-transparent h-12 text-base"
                        >
                          <CalendarIcon className="mr-2 h-5 w-5" />
                          {selectedDate ? format(selectedDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecionar data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          locale={ptBR}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-description" className="text-base">
                    Descrição
                  </Label>
                  <Textarea id="event-description" placeholder="Detalhes do evento..." className="text-base" />
                </div>
                <Button className="w-full h-12 text-base">
                  <CalendarIcon className="mr-2 h-5 w-5" />
                  Adicionar à Agenda
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comunidade - Mobile Optimized */}
          <TabsContent value="comunidade" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5" />
                  Fórum da Turma
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Textarea
                    placeholder="Compartilhe uma dúvida, dica ou conquista com a turma..."
                    rows={4}
                    className="text-base"
                  />
                  <Button className="w-full h-12 text-base">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Publicar
                  </Button>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  {[
                    {
                      author: "Maria Santos",
                      time: "2h atrás",
                      content:
                        "Pessoal, alguém tem dicas para otimizar consultas SQL? Estou com dificuldades no projeto de BD.",
                      likes: 5,
                      comments: 3,
                    },
                    {
                      author: "Pedro Lima",
                      time: "5h atrás",
                      content:
                        "Acabei de terminar meu sistema em React! Quem quiser dar uma olhada e dar feedback, me chama no privado 🚀",
                      likes: 12,
                      comments: 7,
                    },
                  ].map((post, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-base">{post.author}</p>
                          <p className="text-sm text-gray-600">{post.time}</p>
                        </div>
                      </div>
                      <p className="text-base mb-4 leading-relaxed">{post.content}</p>
                      <div className="flex items-center gap-6 text-base text-gray-600">
                        <button className="flex items-center gap-2 hover:text-blue-600 active:scale-95 transition-transform">
                          <ThumbsUp className="h-5 w-5" />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-600 active:scale-95 transition-transform">
                          <MessageSquare className="h-5 w-5" />
                          {post.comments}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Links Úteis</CardTitle>
                <CardDescription>Acesso rápido a ferramentas e comunicação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                    <span>WhatsApp Professores</span>
                  </Button>
                  <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                    <Users className="h-6 w-6 text-blue-600" />
                    <span>Discord da Turma</span>
                  </Button>
                  <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                    <span>Portal ETEC</span>
                  </Button>
                  <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                    <FileText className="h-6 w-6 text-orange-600" />
                    <span>Biblioteca Digital</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parceiros - Mobile Optimized */}
          <TabsContent value="parceiros" className="space-y-4 mt-4">
            {userType === "partner" ? (
              // Partner Dashboard - Mobile
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Building className="h-5 w-5" />
                      Dashboard do Parceiro
                    </CardTitle>
                    <CardDescription>Gerencie suas oportunidades para os alunos da ETEC</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <h3 className="text-lg font-semibold">Publicar Nova Vaga de Estágio</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="vacancy-role" className="text-base">
                          Cargo
                        </Label>
                        <Input
                          id="vacancy-role"
                          placeholder="Ex: Estagiário Desenvolvedor Back-end"
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vacancy-location" className="text-base">
                          Localização
                        </Label>
                        <Input
                          id="vacancy-location"
                          placeholder="Ex: São Paulo - SP ou Remoto"
                          className="h-12 text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancy-description" className="text-base">
                        Descrição da Vaga
                      </Label>
                      <Textarea
                        id="vacancy-description"
                        placeholder="Detalhes da vaga, responsabilidades..."
                        rows={4}
                        className="text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancy-requirements" className="text-base">
                        Requisitos
                      </Label>
                      <Textarea
                        id="vacancy-requirements"
                        placeholder="Habilidades e conhecimentos necessários..."
                        rows={3}
                        className="text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancy-link" className="text-base">
                        Link para Inscrição
                      </Label>
                      <Input
                        id="vacancy-link"
                        placeholder="URL para o formulário de inscrição"
                        className="h-12 text-base"
                      />
                    </div>
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-base">
                      <Briefcase className="mr-2 h-5 w-5" />
                      Publicar Vaga
                    </Button>
                  </CardContent>
                </Card>

                {/* Currículos em Análise */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Eye className="h-5 w-5" />
                      Currículos em Análise
                    </CardTitle>
                    <CardDescription>Analise os currículos dos candidatos às suas vagas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {curriculumsInAnalysis.map((curriculum) => (
                      <div key={curriculum.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={curriculum.avatar || "/placeholder.svg"} alt={curriculum.studentName} />
                              <AvatarFallback>
                                {curriculum.studentName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-bold text-lg">{curriculum.studentName}</h3>
                              <p className="text-sm text-gray-600">
                                {curriculum.course} - {curriculum.semester}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-sm">{curriculum.classification}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-yellow-500" />
                                  <span className="text-sm font-bold">{curriculum.score}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Badge
                            variant={
                              curriculum.status === "Aprovado"
                                ? "default"
                                : curriculum.status === "Em Análise"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {curriculum.status}
                          </Badge>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm">
                            <strong>Vaga:</strong> {curriculum.appliedFor}
                          </p>
                          <p className="text-sm">
                            <strong>Data da Candidatura:</strong>{" "}
                            {format(new Date(curriculum.appliedDate), "dd/MM/yyyy", { locale: ptBR })}
                          </p>
                          <p className="text-sm">
                            <strong>Projetos Realizados:</strong> {curriculum.projects}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-sm">Principais Habilidades:</h4>
                          <div className="flex flex-wrap gap-2">
                            {curriculum.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-800">Compatibilidade IA</span>
                            <span className="text-sm font-bold text-blue-600">{curriculum.aiCompatibility}%</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${curriculum.aiCompatibility}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-3 border-t">
                          <Button variant="outline" className="flex-1 h-10 bg-transparent">
                            <Eye className="h-4 w-4 mr-1" />
                            Ver Currículo Completo
                          </Button>
                          {curriculum.status === "Em Análise" && (
                            <>
                              <Button className="flex-1 h-10 bg-green-600 hover:bg-green-700">
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Aprovar
                              </Button>
                              <Button variant="destructive" className="flex-1 h-10">
                                Rejeitar
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            ) : (
              // Student View - Mobile
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Briefcase className="h-5 w-5" />
                      Vagas de Estágio
                    </CardTitle>
                    <CardDescription>Oportunidades de estágio exclusivas para alunos da ETEC</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {internshipVacancies.map((vacancy) => (
                      <div key={vacancy.id} className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{vacancy.role}</h3>
                            <p className="text-base text-gray-700 flex items-center gap-2">
                              <Building className="h-4 w-4 text-gray-500" />
                              {vacancy.company}
                            </p>
                            <p className="text-base text-gray-600 flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              {vacancy.location}
                            </p>
                          </div>
                          {/* Selo de Classificação */}
                          <div
                            className={`flex items-center gap-1 ${studentClassification.bgColor} px-3 py-2 rounded-full`}
                          >
                            <span className="text-lg">{studentClassification.badge}</span>
                            <span className={`text-sm font-medium ${studentClassification.color}`}>
                              {studentClassification.level}
                            </span>
                          </div>
                        </div>

                        <p className="text-base leading-relaxed">{vacancy.description}</p>
                        <p className="text-sm text-gray-500">**Requisitos:** {vacancy.requirements}</p>

                        {/* Compatibilidade IA */}
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-blue-800">Compatibilidade IA</span>
                            <span className="text-sm font-bold text-blue-600">87%</span>
                          </div>
                          <div className="w-full bg-blue-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: "87%" }}></div>
                          </div>
                          <p className="text-xs text-blue-700 mt-1">
                            Suas habilidades em React e Node.js são ideais para esta vaga!
                          </p>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 h-12 bg-transparent text-base">
                            <Link className="h-4 w-4 mr-1" />
                            Ver Detalhes
                          </Button>
                          <Button
                            className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-base"
                            onClick={() => setShowCurriculumModal(true)}
                          >
                            <User className="h-4 w-4 mr-1" />
                            Enviar Currículo
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Megaphone className="h-5 w-5" />
                      Palestras e Workshops
                    </CardTitle>
                    <CardDescription>Eventos online e presenciais com especialistas do mercado</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {lectureInvitations.map((lecture) => (
                      <div key={lecture.id} className="p-4 border rounded-lg space-y-3">
                        <h3 className="font-bold text-lg">{lecture.title}</h3>
                        <p className="text-base text-gray-700 flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          {lecture.company}
                        </p>
                        <p className="text-base text-gray-600 flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          {format(new Date(lecture.date), "dd/MM/yyyy", { locale: ptBR })} às {lecture.time}
                        </p>
                        <p className="text-base text-gray-600 flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-500" />
                          Palestrante: {lecture.speaker}
                        </p>
                        <Button variant="link" className="p-0 h-auto text-base">
                          <Link className="h-4 w-4 mr-1" />
                          <a href={lecture.link} target="_blank" rel="noopener noreferrer">
                            Inscrever-se / Acessar
                          </a>
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Building className="h-5 w-5" />
                      Visitas Técnicas
                    </CardTitle>
                    <CardDescription>Conheça empresas parceiras e seus ambientes de trabalho</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {companyVisits.map((visit) => (
                      <div key={visit.id} className="p-4 border rounded-lg space-y-3">
                        <h3 className="font-bold text-lg">{visit.company}</h3>
                        <p className="text-base text-gray-600 flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4 text-gray-500" />
                          {format(new Date(visit.date), "dd/MM/yyyy", { locale: ptBR })} às {visit.time}
                        </p>
                        <p className="text-base leading-relaxed">{visit.description}</p>

                        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                          <span className="text-sm text-green-800">
                            Vagas: {visit.registered}/{visit.slots}
                          </span>
                          <div className="w-24 bg-green-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${(visit.registered / visit.slots) * 100}%` }}
                            ></div>
                          </div>
                        </div>

                        <Button className="w-full h-12 text-base" disabled={visit.registered >= visit.slots}>
                          {visit.registered >= visit.slots ? "Vagas Esgotadas" : "Inscrever-se"}
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Vídeos - Mobile Optimized */}
          <TabsContent value="videos" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Video className="h-5 w-5" />
                  Publicar Novo Vídeo
                </CardTitle>
                <CardDescription>Compartilhe tutoriais, dicas ou projetos em vídeo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="video-title" className="text-base">
                    Título do Vídeo
                  </Label>
                  <Input
                    id="video-title"
                    placeholder="Ex: Tutorial de Git e GitHub para Iniciantes"
                    className="h-12 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="video-description" className="text-base">
                    Descrição
                  </Label>
                  <Textarea
                    id="video-description"
                    placeholder="Descreva o conteúdo do seu vídeo..."
                    rows={4}
                    className="text-base"
                  />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-base text-gray-600">Toque para selecionar vídeo</p>
                  <p className="text-sm text-gray-500">Suporta: .mp4, .mov, .avi (máx. 200MB)</p>
                </div>
                <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-base">
                  <Video className="mr-2 h-5 w-5" />
                  Publicar Vídeo
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <PlayCircle className="h-5 w-5" />
                  Galeria de Vídeos ADS
                </CardTitle>
                <CardDescription>Assista e aprenda com vídeos da comunidade</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {videos.map((video) => (
                    <div key={video.id} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="relative">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-48 object-cover cursor-pointer"
                        />
                        <a
                          href={video.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
                          aria-label={`Assistir vídeo: ${video.title}`}
                        >
                          <PlayCircle className="h-16 w-16 text-white opacity-80 hover:opacity-100 cursor-pointer" />
                        </a>
                        <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </Badge>
                        <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-50 px-2 py-1 rounded">
                          <Brain className="h-3 w-3 text-green-600" />
                          <span className="text-xs font-medium text-green-600">{video.aiScore}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                        <div className="flex items-center gap-3 text-base text-gray-600 mb-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={video.avatar || "/placeholder.svg"} alt={video.author} />
                            <AvatarFallback className="text-sm">
                              {video.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex items-center gap-2">
                            <span>{video.author}</span>
                            {video.userType === "graduate" && (
                              <Badge variant="secondary" className="bg-purple-50 text-purple-700 text-xs">
                                💎 Formado
                              </Badge>
                            )}
                            {video.userType === "teacher" && (
                              <Badge variant="secondary" className="bg-green-50 text-green-700 text-xs">
                                👨‍🏫 Professor
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{video.views} visualizações</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>IA: {video.aiScore}</span>
                          </div>
                        </div>

                        {/* Sistema de Curtidas para Vídeos */}
                        <div className="flex items-center gap-3 mb-4">
                          {/* Curtidas Diamante - Formandos */}
                          {video.likes.graduates > 0 && (
                            <button className="flex items-center gap-1 bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-full active:scale-95 transition-transform">
                              <ThumbsUp className="h-4 w-4 text-purple-600" />
                              <span className="text-sm font-medium text-purple-600">{video.likes.graduates}</span>
                              <span className="text-xs">💎</span>
                            </button>
                          )}

                          {/* Curtidas Ouro - Parceiros */}
                          {video.likes.partners > 0 && (
                            <button className="flex items-center gap-1 bg-yellow-50 hover:bg-yellow-100 px-2 py-1 rounded-full active:scale-95 transition-transform">
                              <ThumbsUp className="h-4 w-4 text-yellow-600" />
                              <span className="text-sm font-medium text-yellow-600">{video.likes.partners}</span>
                              <span className="text-xs">🥇</span>
                            </button>
                          )}

                          {/* Curtidas Prata - Professores */}
                          {video.likes.teachers > 0 && (
                            <button className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded-full active:scale-95 transition-transform">
                              <ThumbsUp className="h-4 w-4 text-gray-600" />
                              <span className="text-sm font-medium text-gray-600">{video.likes.teachers}</span>
                              <span className="text-xs">🥈</span>
                            </button>
                          )}

                          {/* Curtidas Bronze - Alunos */}
                          <button className="flex items-center gap-1 bg-orange-50 hover:bg-orange-100 px-2 py-1 rounded-full active:scale-95 transition-transform">
                            <ThumbsUp className="h-4 w-4 text-orange-600" />
                            <span className="text-sm font-medium text-orange-600">{video.likes.students}</span>
                            <span className="text-xs">🥉</span>
                          </button>

                          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 active:scale-95 transition-transform">
                            <MessageSquare className="h-5 w-5" />
                            <span className="text-base">{video.comments}</span>
                          </button>
                        </div>

                        <Button asChild variant="outline" size="sm" className="w-full h-12 bg-transparent text-base">
                          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                            <PlayCircle className="mr-2 h-5 w-5" />
                            Assistir Vídeo
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Formandos - Nova Aba */}
          <TabsContent value="formandos" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Gem className="h-5 w-5 text-purple-600" />
                  Hall da Fama - Formandos ADS
                </CardTitle>
                <CardDescription>Conheça os ex-alunos que se destacaram no curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {topStudents
                    .filter((student) => student.classification.includes("Formad"))
                    .map((graduate, index) => (
                      <div
                        key={index}
                        className="p-6 border-2 border-purple-200 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar className="w-16 h-16 border-4 border-purple-300">
                            <AvatarImage src={graduate.avatar || "/placeholder.svg"} alt={graduate.name} />
                            <AvatarFallback className="text-lg font-bold text-purple-600">
                              {graduate.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-bold text-xl text-purple-900">{graduate.name}</h3>
                              <Badge className="bg-purple-600 text-white">💎 Formado</Badge>
                            </div>
                            <p className="text-purple-700 font-medium">{graduate.course}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Star className="h-5 w-5 text-yellow-500" />
                              <span className="text-lg font-bold text-purple-600">{graduate.score}</span>
                              <span className="text-sm text-purple-600">Classificação Final</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl mb-2">👑</div>
                            <p className="text-xs text-purple-600 font-medium">TOP #{index + 1}</p>
                          </div>
                        </div>

                        {/* Conquistas do Formando */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center p-3 bg-white rounded-lg border border-purple-200">
                            <div className="text-2xl font-bold text-purple-600">15</div>
                            <div className="text-xs text-purple-600">Projetos</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg border border-purple-200">
                            <div className="text-2xl font-bold text-purple-600">9.8</div>
                            <div className="text-xs text-purple-600">Média IA</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg border border-purple-200">
                            <div className="text-2xl font-bold text-purple-600">250</div>
                            <div className="text-xs text-purple-600">Curtidas</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg border border-purple-200">
                            <div className="text-2xl font-bold text-purple-600">12</div>
                            <div className="text-xs text-purple-600">Vídeos</div>
                          </div>
                        </div>

                        {/* Status Profissional */}
                        <div className="p-4 bg-white rounded-lg border border-purple-200">
                          <h4 className="font-medium text-purple-900 mb-2">Status Profissional:</h4>
                          <p className="text-sm text-purple-700">
                            <strong>Empresa:</strong> Tech Solutions Ltda.
                          </p>
                          <p className="text-sm text-purple-700">
                            <strong>Cargo:</strong> Desenvolvedor Full Stack Júnior
                          </p>
                          <p className="text-sm text-purple-700">
                            <strong>Desde:</strong> Janeiro 2024
                          </p>
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex gap-2 mt-4">
                          <Button
                            variant="outline"
                            className="flex-1 h-10 bg-transparent border-purple-300 text-purple-700"
                          >
                            <User className="h-4 w-4 mr-1" />
                            Ver Perfil
                          </Button>
                          <Button className="flex-1 h-10 bg-purple-600 hover:bg-purple-700">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Conectar
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas dos Formandos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  Estatísticas dos Formandos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600">Taxa de Empregabilidade</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">R$ 3.200</div>
                    <div className="text-sm text-gray-600">Salário Médio Inicial</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">6 meses</div>
                    <div className="text-sm text-gray-600">Tempo Médio para Emprego</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600">87</div>
                    <div className="text-sm text-gray-600">Formandos desde 2020</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimentos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  Depoimentos dos Formandos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    name: "Ana Costa",
                    company: "Tech Solutions",
                    message:
                      "O curso de ADS da ETEC me preparou muito bem para o mercado. Hoje trabalho como desenvolvedora e uso diariamente tudo que aprendi!",
                    avatar: "/placeholder.svg?height=40&width=40&text=AC",
                  },
                  {
                    name: "Carlos Silva",
                    company: "Data Insights",
                    message:
                      "A metodologia prática e os projetos reais fizeram toda a diferença. Consegui meu primeiro emprego antes mesmo de me formar!",
                    avatar: "/placeholder.svg?height=40&width=40&text=CS",
                  },
                ].map((testimonial, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-base">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                      <Badge className="bg-purple-600 text-white ml-auto">💎 Formado</Badge>
                    </div>
                    <p className="text-base leading-relaxed italic">"{testimonial.message}"</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perfil - Mobile Optimized */}
          <TabsContent value="perfil" className="space-y-4 mt-4">
            <Card className="shadow-lg overflow-hidden">
              <CardHeader className="relative p-0 h-40 rounded-t-lg overflow-hidden">
                <img
                  src={userProfile.coverImage || "/placeholder.svg"}
                  alt="Capa do Perfil"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <input
                  type="file"
                  id="cover-image-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleCoverImageChange}
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-3 right-3 z-10 h-8 text-xs bg-white/90 hover:bg-white"
                  onClick={() => document.getElementById("cover-image-upload")?.click()}
                >
                  <Upload className="h-3 w-3 mr-1" />
                  Alterar Capa
                </Button>
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-20">
                  <div className="relative">
                    <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                      <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
                      <AvatarFallback className="text-3xl">JS</AvatarFallback>
                    </Avatar>
                    {/* Selo de Classificação no Avatar */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-2xl">{studentClassification.badge}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 p-6 pt-20">
                <input
                  type="file"
                  id="profile-image-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleProfileImageChange}
                />

                {/* Informações Principais */}
                <div className="text-center space-y-2">
                  <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                  <p className="text-lg text-gray-600">{userProfile.course}</p>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="outline" className="text-sm">
                      {userProfile.semester}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      RM: {userProfile.rm}
                    </Badge>
                  </div>
                  <div
                    className={`inline-flex items-center gap-2 ${studentClassification.bgColor} px-4 py-2 rounded-full mt-3`}
                  >
                    <span className="text-xl">{studentClassification.badge}</span>
                    <span className={`text-base font-bold ${studentClassification.color}`}>
                      {studentClassification.level}
                    </span>
                    <span className="text-sm text-gray-600">Score: {studentClassification.score.toFixed(1)}/10</span>
                  </div>
                </div>

                {/* Estatísticas do Perfil */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">15</div>
                    <div className="text-xs text-gray-600">Trabalhos</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">{userProfile.videoStats.totalVideos}</div>
                    <div className="text-xs text-gray-600">Vídeos</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <div className="text-xl font-bold text-purple-600">{userProfile.videoStats.totalLikes}</div>
                    <div className="text-xs text-gray-600">Curtidas</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-xl font-bold text-orange-600">65%</div>
                    <div className="text-xs text-gray-600">TCC</div>
                  </div>
                </div>

                {/* Biografia */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Sobre</h3>
                  <p className="text-base leading-relaxed text-gray-700">{userProfile.bio}</p>
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 h-12 bg-transparent"
                    onClick={() => document.getElementById("profile-image-upload")?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Alterar Foto
                  </Button>
                  <Button className="flex-1 h-12">
                    <Settings className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Card de Classificação Profissional Detalhada */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5" />
                  Análise IA Detalhada
                </CardTitle>
                <CardDescription>Classificação automática baseada em desempenho e engajamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Fatores de Avaliação */}
                <div className="space-y-4">
                  <h4 className="font-medium text-base">Fatores de Avaliação:</h4>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Qualidade dos Trabalhos</span>
                        <span className="text-sm font-medium">{studentClassification.factors.workQuality}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.workQuality * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Qualidade dos Vídeos</span>
                        <span className="text-sm font-medium">{studentClassification.factors.videoQuality}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-red-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.videoQuality * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Engajamento Social</span>
                        <span className="text-sm font-medium">{studentClassification.factors.socialEngagement}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.socialEngagement * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Taxa de Presença</span>
                        <span className="text-sm font-medium">{studentClassification.factors.attendanceRate}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.attendanceRate * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Progresso TCC</span>
                        <span className="text-sm font-medium">{studentClassification.factors.tccProgress}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.tccProgress * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Qualidade da Escrita</span>
                        <span className="text-sm font-medium">{studentClassification.factors.writingQuality}/10</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.writingQuality * 10}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Habilidades Técnicas</span>
                        <span className="text-sm font-medium">
                          {studentClassification.factors.professionalSkills}/10
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-pink-600 h-2 rounded-full"
                          style={{ width: `${studentClassification.factors.professionalSkills * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pontos Fortes e Melhorias */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-green-700">Pontos Fortes:</h4>
                    <div className="flex flex-wrap gap-2">
                      {studentClassification.strengths.map((strength, index) => (
                        <Badge key={index} variant="secondary" className="bg-green-50 text-green-700">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-orange-700">Áreas para Melhoria:</h4>
                    <div className="flex flex-wrap gap-2">
                      {studentClassification.improvements.map((improvement, index) => (
                        <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                          {improvement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Atualização */}
                <div className="text-center pt-3 border-t">
                  <p className="text-xs text-gray-500">
                    Última atualização: Hoje às 14:30 • Próxima análise: Em 7 dias
                  </p>
                  <Button variant="outline" size="sm" className="mt-2 h-8 text-xs bg-transparent">
                    <Brain className="h-3 w-3 mr-1" />
                    Solicitar Reavaliação IA
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Meus Vídeos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Video className="h-5 w-5" />
                  Meus Vídeos
                </CardTitle>
                <CardDescription>Seus vídeos publicados e estatísticas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Estatísticas de Vídeos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">{userProfile.videoStats.totalVideos}</div>
                    <div className="text-sm text-gray-600">Vídeos Publicados</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{userProfile.videoStats.totalViews}</div>
                    <div className="text-sm text-gray-600">Visualizações Totais</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{userProfile.videoStats.totalLikes}</div>
                    <div className="text-sm text-gray-600">Curtidas Totais</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{userProfile.videoStats.averageRating}</div>
                    <div className="text-sm text-gray-600">Média IA</div>
                  </div>
                </div>

                {/* Lista de Vídeos do Usuário */}
                <div className="space-y-3">
                  <h4 className="font-medium text-base">Últimos Vídeos:</h4>
                  {videos
                    .filter((video) => video.author === userProfile.name)
                    .map((video) => (
                      <div key={video.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{video.title}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span>{video.views} views</span>
                            <span>
                              {video.likes.students +
                                video.likes.teachers +
                                video.likes.partners +
                                video.likes.graduates}{" "}
                              curtidas
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span>{video.aiScore}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin - Mobile Optimized */}
          <TabsContent value="admin" className="space-y-4 mt-4">
            {userType === "staff" ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Settings className="h-5 w-5" />
                    Painel de Administração
                  </CardTitle>
                  <CardDescription>Gerencie usuários, conteúdos e configurações da plataforma.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span>Gerenciar Alunos</span>
                    </Button>
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <Briefcase className="h-6 w-6 text-green-600" />
                      <span>Gerenciar Parceiros</span>
                    </Button>
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <FileText className="h-6 w-6 text-purple-600" />
                      <span>Moderar Trabalhos</span>
                    </Button>
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <Video className="h-6 w-6 text-red-600" />
                      <span>Gerenciar Vídeos</span>
                    </Button>
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <CalendarIcon className="h-6 w-6 text-orange-600" />
                      <span>Gerenciar Eventos</span>
                    </Button>
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <Bell className="h-6 w-6 text-yellow-600" />
                      <span>Enviar Notificações</span>
                    </Button>
                    <Button variant="outline" className="h-16 p-4 flex items-center gap-4 bg-transparent text-base">
                      <UserPlus className="h-6 w-6 text-indigo-600" />
                      <span>Cadastrar Usuários</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acesso Restrito</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base">
                    Você não tem permissão para acessar esta área. Por favor, faça login como membro da equipe.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Mobile Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden z-40">
        <div className="grid grid-cols-5 gap-1 p-2">
          {menuItems.slice(0, 5).map((item) => {
            const Icon = item.icon
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`flex flex-col items-center gap-1 h-16 p-2 ${
                  activeTab === item.id ? "text-blue-600 bg-blue-50" : "text-gray-600"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
