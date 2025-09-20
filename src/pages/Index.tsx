import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

const categories = [
  { name: 'Фильмы', count: '12,345', icon: 'Film' },
  { name: 'Музыка', count: '8,921', icon: 'Music' },
  { name: 'Игры', count: '6,789', icon: 'Gamepad2' },
  { name: 'Программы', count: '4,567', icon: 'Laptop' },
  { name: 'Книги', count: '3,210', icon: 'Book' },
  { name: 'Другое', count: '2,134', icon: 'Package' }
]

const topTorrents = [
  {
    id: 1,
    title: 'Последний фильм 2024',
    category: 'Фильмы',
    size: '4.2 GB',
    seeders: 1205,
    leechers: 89,
    downloads: 45678,
    uploaded: '2 часа назад',
    quality: 'HD'
  },
  {
    id: 2,
    title: 'Популярная игра 2024',
    category: 'Игры',
    size: '15.8 GB',
    seeders: 892,
    leechers: 156,
    downloads: 23456,
    uploaded: '5 часов назад',
    quality: 'Repack'
  },
  {
    id: 3,
    title: 'Новый альбом исполнителя',
    category: 'Музыка',
    size: '152 MB',
    seeders: 456,
    leechers: 23,
    downloads: 12789,
    uploaded: '1 день назад',
    quality: 'FLAC'
  },
  {
    id: 4,
    title: 'Полезная программа для работы',
    category: 'Программы',
    size: '890 MB',
    seeders: 234,
    leechers: 45,
    downloads: 8901,
    uploaded: '3 дня назад',
    quality: 'Full'
  }
]

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary">TorrentTracker</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Поиск</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Топ</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Модерация</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="UserPlus" size={16} />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск торрентов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button>
                <Icon name="Search" size={16} />
                Найти
              </Button>
            </div>
            <div className="mt-4 text-center">
              <Button variant="link" className="text-sm text-muted-foreground">
                Расширенный поиск
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Folder" size={20} />
                  <span>Категории</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded hover:bg-accent cursor-pointer">
                  <span className="font-medium">Все категории</span>
                  <Badge variant="secondary">42,166</Badge>
                </div>
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-2 rounded hover:bg-accent cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <Icon name={category.icon as any} size={16} />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} />
                  <span>Статистика</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Пользователей:</span>
                  <span className="font-medium">12,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Онлайн:</span>
                  <span className="font-medium text-accent">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Торрентов:</span>
                  <span className="font-medium">42,166</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Сидеров:</span>
                  <span className="font-medium text-accent">5,234</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="popular" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="popular">Популярные</TabsTrigger>
                <TabsTrigger value="recent">Новые</TabsTrigger>
                <TabsTrigger value="top">Топ загрузок</TabsTrigger>
              </TabsList>

              <TabsContent value="popular" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Популярные торренты</h2>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Filter" size={16} />
                    <span>Сортировать по сидерам</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {topTorrents.map((torrent) => (
                    <Card key={torrent.id} className="hover:bg-accent/50 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium text-foreground hover:text-primary">
                                {torrent.title}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {torrent.quality}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span className="flex items-center space-x-1">
                                <Icon name="Folder" size={12} />
                                <span>{torrent.category}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Icon name="HardDrive" size={12} />
                                <span>{torrent.size}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Icon name="Clock" size={12} />
                                <span>{torrent.uploaded}</span>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="text-center">
                              <div className="flex items-center space-x-1 text-accent">
                                <Icon name="ArrowUp" size={12} />
                                <span className="font-medium">{torrent.seeders}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">Сидеры</span>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center space-x-1 text-destructive">
                                <Icon name="ArrowDown" size={12} />
                                <span className="font-medium">{torrent.leechers}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">Личеры</span>
                            </div>
                            <div className="text-center">
                              <div className="flex items-center space-x-1">
                                <Icon name="Download" size={12} />
                                <span className="font-medium">{torrent.downloads.toLocaleString()}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">Загрузок</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Icon name="Download" size={14} />
                              Скачать
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-4">
                <h2 className="text-lg font-semibold">Недавно добавленные</h2>
                <div className="text-center py-8 text-muted-foreground">
                  Новые торренты появятся здесь
                </div>
              </TabsContent>

              <TabsContent value="top" className="space-y-4">
                <h2 className="text-lg font-semibold">Топ загрузок за неделю</h2>
                <div className="text-center py-8 text-muted-foreground">
                  Самые популярные торренты недели
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index